import React, { useContext } from 'react'
import { Option } from "../model/state"
import { useCardano, CardanoWalletSelector, CardanoToaster } from "use-cardano"
import { HydraSocketContext } from '../hydra-ws/context'

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
      console.log("txHash: ", await signedTx.submit())
      const messageToSend = JSON.stringify({ "tag": "NewTx", "transaction": signedTx.toString() })
      console.log(messageToSend)
      socket.send(messageToSend)
    } else {
      console.error("Cant build tx due to missing Lucid instance")
    }
  }

  return (
    <div>
      <div>
        <h1 className="title">
          <a href="https://hydra.family">Hydra </a>Poll
        </h1>
        <h2>Vote for the next Hydra feature</h2>
      </div>
      <div>
        <CardanoWalletSelector />
        <div className="description">Connected Address: {account.address || 'No wallet connected.'}</div>
      </div>
      <div className="grid">
        {options.map((option) => (
          <div className="card" key={option.id}>
            <h3>{option.text}</h3>
            <h4>{option.votes}</h4>
            <button className="button" onClick={() => handleVote(option.id)}>Vote</button>
          </div>
        ))}
      </div>
      <CardanoToaster />
    </div>
  )
}

export default HydraPoll
