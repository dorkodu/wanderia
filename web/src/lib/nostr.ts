// Basic Nostr utility for relay connection, event fetch, and publish
import { useEffect, useState } from "react"

const RELAYS = [
  "wss://relay.damus.io",
  "wss://relay.nostr.band",
  "wss://nostr-pub.wellorder.net"
]

export function useNostrFeed(pubkey?: string) {
  const [events, setEvents] = useState<any[]>([])
  useEffect(() => {
    const ws = new WebSocket(RELAYS[0])
    ws.onopen = () => {
      // Subscribe to feed (filter by pubkey if provided)
      const filter = pubkey
        ? { "kinds": [1], "authors": [pubkey] }
        : { "kinds": [1] }
      ws.send(JSON.stringify(["REQ", "feed", filter]))
    }
    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data)
      if (data[0] === "EVENT") {
        setEvents((evs) => [data[2], ...evs])
      }
    }
    return () => ws.close()
  }, [pubkey])
  return events
}

export function useNostrProfile(pubkey: string) {
  const [profile, setProfile] = useState<any>(null)
  useEffect(() => {
    const ws = new WebSocket(RELAYS[0])
    ws.onopen = () => {
      ws.send(
        JSON.stringify([
          "REQ",
          "profile",
          { "kinds": [0], "authors": [pubkey] }
        ])
      )
    }
    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data)
      if (data[0] === "EVENT" && data[2].kind === 0) {
        setProfile(JSON.parse(data[2].content))
      }
    }
    return () => ws.close()
  }, [pubkey])
  return profile
}

// Helper to get pubkey from privkey (using nip19 or similar, to be implemented)
export function getPubkeyFromPrivkey(privkey: string): string {
  // Placeholder: in real app, use secp256k1/nip19
  return privkey
}

// Publish event (to be implemented)
export async function publishEvent(privkey: string, content: string) {
  // Placeholder: sign and send event to relay
}
