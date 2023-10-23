import { FC, useState } from "react"
import { HydraEvent, HydraEventType } from './hydra-ws/events'
import { useHydraEvent } from "./hydra-ws/hook"
import './App.css'
import HydraPoll from "./poll"
import cbor from 'cbor-web'
import {Option} from "./model/state"


const App: FC = () => {
  // const [state, setState] = useState(transitions.disconnected(options))
  const [options, setOptions] = useState<Option[]>([
    { id: 1, text: 'Incremental commits/decommits', votes: 0 },
    { id: 2, text: 'Dynamic Hydra Parties', votes: 0 },
    { id: 3, text: 'Interconnected Hydra Heads', votes: 0 },
  ])

  const updateVoteCount = (optionId: number) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === optionId
          ? { ...option, votes: option.votes + 1 }
          : option
      )
    )
  }

  useHydraEvent((event: HydraEvent) => {
    console.log("HydrEvent: %o", event)
    switch (event.tag) {
      case HydraEventType.ClientConnected:
        // setState(transitions.connected(options))
        break
      case HydraEventType.ClientDisconnected:
        // setState(transitions.disconnected(options))
        break
      case HydraEventType.Update:
        // setState(transitions.handleAppEvent(state, event.output))
        // const metadataLabel = 14
        // let msg = JSON.parse(event.data)
        // if (msg.tag == "TxValid") {

        //   if (msg.transaction.auxiliaryData != null) {
        //     console.log("Transaction has auxiliary data", msg.transaction.auxiliaryData)
        //     const aux = cbor.decodeFirstSync(msg.transaction.auxiliaryData).value
        //     const voteOption = (aux.get(0) || aux.get(1)).get(metadataLabel)
        //     updateVoteCount(voteOption)
        //   }
        // }
        break
      default:
        break
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <title>Hydra Poll</title>
        <meta name="description" content="Poll running on Hydra Head protocol" />
        <link
          rel="icon"
          href="https://meshjs.dev/favicon/favicon-32x32.png"
        />
        <link
          href="https://meshjs.dev/css/template.css"
          rel="stylesheet"
          key="mesh-demo"
        />
      </header>

      <main className="main">
        <HydraPoll options={options} />
      </main>

      <footer className="footer">
      </footer>
    </div>
  )
}

export default App