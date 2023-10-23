import React from 'react'
import {Option} from "./model/state"

const HydraPoll: React.FC<{ options: Option[] }> = ({options}) => {
  // Function to send a vote message through WebSocket
  const handleVote = async (optionId: number) => {
    fetch("http://13.39.230.205:1337/poll/" + optionId, {"mode": "no-cors"})
         .then((res) => res.json())
         .then((data) => {
            console.log(data)
         })
         .catch((err) => {
            console.log(err.message)
         })
  }

  return (
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
  )
}

export default HydraPoll
