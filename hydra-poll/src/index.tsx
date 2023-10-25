import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import { HydraSocketProvider } from "./hydra-ws/provider"
import './styles/index.css'

const UseCardanoOptions = {
  autoReconnect: false,
  testnetNetwork: "Preprod",
  allowedNetworks: ["Testnet", "Preprod"],
  node: {
    provider: "blockfrost",
    projectId: process.env.REACT_APP_BLOCKFROST_PROJECT_ID_PREPROD
  }
}

const UserHydraSocketOptions = {
  url: process.env.REACT_APP_HYDRA_NODE_URL
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <HydraSocketProvider options={UserHydraSocketOptions}>
      <App />
    </HydraSocketProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
