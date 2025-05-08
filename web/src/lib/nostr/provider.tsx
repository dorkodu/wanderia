// NostrProvider.tsx
import { type NostrEvent, NPool, NRelay1 } from '@nostrify/nostrify'
import { NostrContext, type NostrContextType } from '@nostrify/react'
import { useRef } from 'react'

export interface NostrProviderProps {
  children: React.ReactNode
  relays: `wss://${string}`[]
}

const NostrProvider: React.FC<NostrProviderProps> = (props) => {
  const { children, relays } = props

  // Create NPool instance only once
  const pool = useRef<NPool>(undefined)

  if (!pool.current) {
    pool.current = new NPool({
      open(url: string) {
        return new NRelay1(url)
      },
      reqRouter(filters) {
        return new Map(relays.map((url) => [url, filters]))
      },
      eventRouter(_event: NostrEvent) {
        return relays
      },
    })
  }

  return (
    <NostrContext.Provider value={{ nostr: pool.current }}>
      {children}
    </NostrContext.Provider>
  )
}

export default NostrProvider