import { NSchema as n } from "@nostrify/nostrify"
import type { NostrProviderProps } from "./provider"

export const relays: NostrProviderProps["relays"] = [
  "wss://relay.damus.io",
  "wss://relay.nostr.band"
]
