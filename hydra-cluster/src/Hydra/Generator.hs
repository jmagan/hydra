module Hydra.Generator where

import Hydra.Cardano.Api
import Hydra.Prelude hiding (size)

import Cardano.Api.Ledger (PParams)
import Cardano.Api.UTxO qualified as UTxO
import CardanoClient (QueryPoint (QueryTip), mkGenesisTx, queryUTxO)
import Control.Monad (foldM)
import Data.Aeson (object, withObject, (.:), (.=))
import Data.Default (def)
import Data.List qualified as List
import Hydra.Cluster.Fixture (Actor (Faucet), availableInitialFunds)
import Hydra.Cluster.Util (keysFor)
import Hydra.Ledger (IsTx (balance))
import Hydra.Ledger.Cardano (genSigningKey, generateOneTransfer, mkSimpleTx)
import Test.QuickCheck (choose, generate, sized)
import Test.QuickCheck.Monadic (run)

networkId :: NetworkId
networkId = Testnet $ NetworkMagic 42

-- | A 'Dataset' that can be run for testing purpose.
-- Each `Dataset` represents a complete scenario where several `ClientDataset` are run concurrently
-- against one or more `HydraNode`s. A dataset can optionally have a `title` and `description`
-- which will be used to report results.
data Dataset = Dataset
  { fundingTransaction :: Tx
  , clientDatasets :: [ClientDataset]
  , title :: Maybe Text
  , description :: Maybe Text
  }
  deriving stock (Show, Generic)
  deriving anyclass (ToJSON, FromJSON)

instance Arbitrary Dataset where
  arbitrary = sized $ \n -> do
    sk <- genSigningKey
    allClientKeys <- replicateM (n `div` 10) arbitrary
    genDatasetConstantUTxO sk allClientKeys n

data ClientKeys = ClientKeys
  { signingKey :: SigningKey PaymentKey
  -- ^ Key used by the hydra-node to authorize hydra transactions and holding fuel.
  , externalSigningKey :: SigningKey PaymentKey
  -- ^ Key holding funds to commit.
  }
  deriving stock (Show)

instance ToJSON ClientKeys where
  toJSON ClientKeys{signingKey, externalSigningKey} =
    object
      [ "signingKey" .= serialiseToTextEnvelope (Just "signingKey") signingKey
      , "externalSigningKey" .= serialiseToTextEnvelope (Just "externalSigningKey") externalSigningKey
      ]

instance FromJSON ClientKeys where
  parseJSON =
    withObject "ClientKeys" $ \o ->
      ClientKeys
        <$> (decodeSigningKey =<< o .: "signingKey")
        <*> (decodeSigningKey =<< o .: "externalSigningKey")
   where
    decodeSigningKey v = do
      envelope <- parseJSON v
      deserialiseFromTextEnvelope (AsSigningKey AsPaymentKey) envelope
        & either (fail . show) pure

instance Arbitrary ClientKeys where
  arbitrary = ClientKeys <$> genSigningKey <*> genSigningKey

data ClientDataset = ClientDataset
  { clientKeys :: ClientKeys
  , initialUTxO :: UTxO
  , txSequence :: [Tx]
  }
  deriving stock (Show, Generic)
  deriving anyclass (ToJSON, FromJSON)

defaultProtocolParameters :: PParams LedgerEra
defaultProtocolParameters = def

generateRealDataset ::
  -- | Number of clients keys
  [ClientKeys] ->
  -- | Number of transactions
  Int ->
  IO Dataset
generateRealDataset allClientKeys nTxs = do
  clientDatasets <- forM allClientWithIds generateClientDataset'
  pure Dataset{fundingTransaction = mempty, clientDatasets, title = Nothing, description = Nothing}
 where
  allClientWithIds = zip [1 ..] allClientKeys
  generateClientDataset' (n, clientKeys@ClientKeys{signingKey}) = do
    let vk = getVerificationKey signingKey
    let (_, ClientKeys{signingKey = recipientSigningKey}) = List.head $ filter (\(n', _) -> n /= n') allClientWithIds
    let recipientAddr = mkVkAddress networkId (getVerificationKey recipientSigningKey)
    let recipientShelleyAddr = undefined
    initialUTxO <- queryUTxO networkId (File "/home/v0d1ch/code/hydra/demo/devnet/node.socket") QueryTip [recipientShelleyAddr]
    let x = foldl' generateTransfer' (initialUTxO, signingKey, recipientAddr, []) [1 .. nTxs]
    let txSequence = reverse . fourth $ x
    pure ClientDataset{clientKeys, initialUTxO, txSequence}

  generateTransfer' (utxo, sender, recipient, txs) _ =
    case UTxO.pairs utxo of
      [txin] ->
        case mkSimpleTx txin (recipient, balance @Tx utxo) sender of
          Left e -> error $ "Tx construction failed: " <> show e <> ", utxo: " <> show utxo
          Right tx ->
            (utxoFromTx tx, sender, recipient, tx : txs)
      _ ->
        error "Couldn't generate transaction sequence: need exactly one UTXO."
  fourth (_, _, _, c) = c

-- | Generate 'Dataset' which does not grow the per-client UTXO set over time.
-- The sequence of transactions generated consist only of simple payments from
-- and to arbitrary keys controlled by the individual clients.
generateConstantUTxODataset ::
  -- | Number of clients keys
  [ClientKeys] ->
  -- | Number of transactions
  Int ->
  IO Dataset
generateConstantUTxODataset allClientKeys nTxs = do
  (_, faucetSk) <- keysFor Faucet
  generate $ genDatasetConstantUTxO faucetSk allClientKeys nTxs

genDatasetConstantUTxO ::
  -- | The faucet signing key
  SigningKey PaymentKey ->
  -- | Number of clients keys
  [ClientKeys] ->
  -- | Number of transactions
  Int ->
  Gen Dataset
genDatasetConstantUTxO faucetSk allClientKeys nTxs = do
  let nClients = length allClientKeys
  -- Prepare funding transaction which will give every client's
  -- 'externalSigningKey' "some" lovelace. The internal 'signingKey' will get
  -- funded in the beginning of the benchmark run.
  clientFunds <- forM allClientKeys $ \ClientKeys{externalSigningKey} -> do
    amount <- Coin <$> choose (1, availableInitialFunds `div` fromIntegral nClients)
    pure (getVerificationKey externalSigningKey, amount)
  let fundingTransaction =
        mkGenesisTx
          networkId
          faucetSk
          (Coin availableInitialFunds)
          clientFunds
  clientDatasets <- forM allClientKeys (generateClientDataset fundingTransaction)
  pure Dataset{fundingTransaction, clientDatasets, title = Nothing, description = Nothing}
 where
  generateClientDataset fundingTransaction clientKeys@ClientKeys{externalSigningKey} = do
    let vk = getVerificationKey externalSigningKey
        keyPair = (vk, externalSigningKey)
        -- NOTE: The initialUTxO must all UTXO we will later commit. We assume
        -- that everything owned by the externalSigningKey will get committed
        -- into the head.
        initialUTxO =
          utxoProducedByTx fundingTransaction
            & UTxO.filter ((== mkVkAddress networkId vk) . txOutAddress)
    txSequence <-
      reverse
        . thrd
        <$> foldM (generateOneTransfer networkId) (initialUTxO, keyPair, []) [1 .. nTxs]
    pure ClientDataset{clientKeys, initialUTxO, txSequence}

  thrd (_, _, c) = c
