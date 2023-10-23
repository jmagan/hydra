// SocketProvider.jsx

import React, { useRef } from "react"
import { HydraSocketContext } from './context'

const HydraSocketProvider: React.FC = ({ children }) => {
    // we use a ref to store the socket as it won't be updated frequently
    const socketRef = useRef<WebSocket | null>(null)
    
    const initializeWebSocket: () => WebSocket = () => {
        const url = new URL(`ws://13.39.230.205:4001`)
        return new WebSocket(url)
    }

    if (!socketRef.current) {
        socketRef.current = initializeWebSocket()
    }

    return (
        <HydraSocketContext.Provider value={{ socket: socketRef.current }}>
            {children}
        </HydraSocketContext.Provider>
    )
}

export default HydraSocketProvider
