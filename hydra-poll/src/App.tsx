import { FC, useState } from "react"
import { HydraEvent, HydraEventType } from './hydra-ws/events'
import { useHydraEvent } from "./hydra-ws/hook"
import React from 'react';
import logo from './logo.svg';
import './App.css';
import HydraPoll from "./poll";

const App: FC<{}> = ({}) => {
  // const [state, setState] = useState(transitions.disconnected(options))

  useHydraEvent((event: HydraEvent) => {
    console.log("HydrEvent: %o", event)
    // switch (event.tag) {
    //   case HydraEventType.ClientConnected:
    //     setState(transitions.connected(options))
    //     break
    //   case HydraEventType.ClientDisconnected:
    //     setState(transitions.disconnected(options))
    //     break
    //   case HydraEventType.Update:
    //     setState(transitions.handleAppEvent(state, event.output))
    //     break
    //   default:
    //     break
    // }
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
        <HydraPoll/>
      </main>

      <footer className="footer">
      </footer>
    </div>
  );
}

export default App