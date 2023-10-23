import { useContext, useEffect, useState } from "react"
import { ClientConnected, ClientDisconnected, HydraEvent, HydraEventType, ServerOutput, Update } from "./events"
import { HydraSocketContext } from "./context"

export const useHydraEvent = (emitEvent: (evt: HydraEvent) => void) => {
    // get the socket instance
    const { socket } = useContext(HydraSocketContext)

    // when the component, *which uses this hook* mounts, add listeners.
    useEffect(() => {
        // Define the listener functions
        const handleOpen = (msg: Event) => {
            // console.log('[HydraEvent] connected', msg)
            emitEvent({ tag: HydraEventType.ClientConnected } as ClientConnected)
        }

        const handleClose = (msg: CloseEvent) => {
            // console.log('[HydraEvent] disconnected', msg)
            emitEvent({ tag: HydraEventType.ClientDisconnected } as ClientDisconnected)
        }

        const handleMessage = (event: MessageEvent) => {
            // console.log("[HydraEvent] ServerOutput", event.data)
            const output = JSON.parse(event.data) as ServerOutput
            emitEvent({ tag: HydraEventType.Update, output } as Update)
        }

        const handleError = (event: Event) => {
            console.error('[HydraEvent] WebSocket Error:', event)
        }

        // Add listeners when the component mounts
        socket.addEventListener('open', handleOpen)
        socket.addEventListener('close', handleClose)
        socket.addEventListener('message', handleMessage)
        socket.addEventListener('error', handleError)

        // remove all the listeners and close the socket when it unmounts
        return () => {
            socket.removeEventListener('open', handleOpen)
            socket.removeEventListener('close', handleClose)
            socket.removeEventListener('message', handleMessage)
            socket.removeEventListener('error', handleError)

            if (socket.readyState === WebSocket.OPEN) {
                socket.close()
            }
        }
    }, [socket])

}
