// SocketProvider.jsx

import React, { useMemo, useRef } from "react"
import { HydraSocketContext } from './context'

type UserHydraSocketOptions = {
    url: string
}

export const HydraSocketProvider = ({
    children,
    options: userOptions,
}: React.PropsWithChildren<UserHydraSocketOptions>) => {
    const options = useMemo(() => ({ ...userOptions }), [userOptions])

    // we use a ref to store the socket as it won't be updated frequently
    const socketRef = useRef<WebSocket | null>(null)

    const initializeWebSocket: () => WebSocket = () => {
        const url = new URL(options.url)
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
