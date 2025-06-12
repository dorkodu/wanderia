
// Nostr protocol primitives and helpers for Wanderia SDK

export interface NostrEvent {
  id: string
  pubkey: string
  created_at: number
  kind: number
  tags: string[][]
  content: string
  sig: string
}

export interface NostrRelay {
  url: string
  status: 'connected' | 'disconnected' | 'error'
}

export interface NostrAppContext {
  relays: NostrRelay[]
  pubkey?: string
}

export type NostrEventHandler = (event: NostrEvent) => void

export function connectRelay(url: string): NostrRelay {
  // Placeholder: In a real SDK, this would open a websocket connection
  return { url, status: 'connected' }
}

export function subscribeToEvents(
): () => void {
  // Placeholder: In a real SDK, this would subscribe via websocket
  // and call onEvent for each event
  return () => { /* unsubscribe logic */ }
}

export function publishEvent(): boolean {
  // Placeholder: In a real SDK, this would send the event to the relay
  return true
}

// Nostr primitives using nostr-tools (v2+)
import type { Event as NostrToolsEvent } from "nostr-tools"
import {
  finalizeEvent,
  generateSecretKey,
  getPublicKey,
  Relay as NostrToolsRelay,
  verifyEvent as nostrToolsVerifyEvent
} from "nostr-tools"

export function createNostrKeyPair() {
  const sk = generateSecretKey()
  const pk = getPublicKey(sk)
  return { sk, pk }
}

export function signNostrEvent(event: NostrToolsEvent, sk: Uint8Array): NostrToolsEvent {
  // finalizeEvent mutates and signs the event
  return finalizeEvent({ ...event }, sk)
}

export function verifyNostrEvent(event: NostrToolsEvent): boolean {
  return nostrToolsVerifyEvent(event)
}

export function connectNostrRelay(url: string) {
  return new NostrToolsRelay(url)
}
