import { generateSecretKey, getPublicKey } from "nostr-tools"

export interface NostrAccount {
  nsec: string // hex-encoded secret key
  npub: string // hex-encoded public key
}

/**
 * Create a new Nostr account (generates a new keypair)
 */
export function createNostrAccount(): NostrAccount {
  const sk = generateSecretKey() // Uint8Array
  const nsec = Buffer.from(sk).toString("hex")
  const npub = getPublicKey(sk)
  return { nsec, npub }
}

/**
 * Import an existing Nostr account from nsec (hex-encoded secret key)
 */
export function importNostrAccount(nsec: string): NostrAccount {
  // Validate nsec length (should be 64 hex chars)
  if (!/^[a-f0-9]{64}$/i.test(nsec)) throw new Error("Invalid nsec format")
  const sk = Uint8Array.from(Buffer.from(nsec, "hex"))
  const npub = getPublicKey(sk)
  return { nsec, npub }
}
