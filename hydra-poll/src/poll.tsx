import React, { useContext } from 'react'
import { Option } from "./model/state"
import { useCardano, CardanoWalletSelector, CardanoToaster } from "use-cardano"
import "use-cardano/styles/use-cardano.css"
import { HydraSocketContext } from './hydra-ws/context'

const HydraPoll: React.FC<{ options: Option[] }> = ({ options }) => {
  const { account, lucid } = useCardano()
  const { socket } = useContext(HydraSocketContext)
  
  // Function to send a vote message through WebSocket
  const handleVote = async function (voteOption: number) {
    if (lucid) {
      const tx = await lucid.newTx()
        .payToAddress("addr_test1vp8m20m650s8u0em4pgka569zx0fssvzywzuqvrnzysfksgxeq2s2", { lovelace: 0n })
        .attachMetadata(14, { msg: voteOption })
        .complete()
      const signedTx = await tx.sign().complete()
      const txHash = await signedTx.submit()
      // console.log(txHash)
      const messageToSend = JSON.stringify({ "tag": "NewTx", "transaction": signedTx.toString() })
      // console.log(messageToSend)
      socket.send(messageToSend)
    } else {
      console.error("Cant build tx due to missing Lucid instance")
    }
  }

  return (
    <div>
      <CardanoWalletSelector />
      <div>Connected Address: {account.address || 'No wallet connected.'}</div>
      <br />
      <div className="hydra-poll">
        <h1 className="title">
          <a href="https://hydra.family">Hydra </a>Poll
        </h1>
        <h2>Vote for the next Hydra feature</h2>
        <div className="options-container">
          {options.map((option) => (
            <div className="option" key={option.id}>
              <div>
                <h3>{option.text}</h3>
                <h4>{option.votes}</h4>
              </div>
              <button onClick={() => handleVote(option.id)}>Vote</button>
            </div>
          ))}
        </div>
      </div>
      <CardanoToaster />
    </div>

  )
}

export default HydraPoll
