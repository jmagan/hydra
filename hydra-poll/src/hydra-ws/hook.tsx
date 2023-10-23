import { useContext, useEffect, useState } from "react"
import { ClientConnected, ClientDisconnected, HydraEvent, HydraEventType } from "./events"
import { HydraSocketContext } from "./context"

export const useHydraEvent = (emitEvent: (evt: HydraEvent) => void) => {
    // get the socket instance
    const { socket } = useContext(HydraSocketContext)
    const [event, setEvent] = useState<HydraEvent | null>(null)

    // when the component, *which uses this hook* mounts, add listeners.
    useEffect(() => {
        socket.addEventListener('open', (msg) => {
            console.log('[HydraEvent] connected', msg)
            setEvent({ tag: HydraEventType.ClientConnected } as ClientConnected)
        })

        socket.addEventListener('close', (msg) => {
            console.log('[HydraEvent] disconnected', msg)
            setEvent({ tag: HydraEventType.ClientDisconnected } as ClientDisconnected)
        })

        socket.addEventListener('message', (event) => {
            console.log('Message received from server:', event.data)
        })

        // socket.addEventListener("message", (e: Buffer) => {
        //     const data = e.toString('utf8')
        //     console.log("[HydraEvent][ServerOutput]", data)
        //     const output = JSON.parse(data) as ServerOutput
        //     setEvent({ tag: HydraEventType.Update, output } as Update)
        // })

        socket.addEventListener('error', (event) => {
            console.error('WebSocket error:', event)
        })

        // remove all the listeners and close the socket when it unmounts
        return () => {
            if (socket.readyState === 1) {
                socket.close()
            }
        }
    }, [socket])

    useEffect(() => {
        event && emitEvent(event)
    }, [event, emitEvent])
}