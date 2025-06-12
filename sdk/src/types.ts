export type Address = string & { readonly __brand: unique symbol }

// Types for decentralized social protocol
export type NostrPublicKey = string & { readonly __brand: unique symbol }
export type SolanaPublicKey = string & { readonly __brand: unique symbol }

export interface SocialProfile {
  pubkey: NostrPublicKey | SolanaPublicKey
  username: string
  avatarUrl?: string
  bio?: string
  protocol: 'nostr' | 'solana'
}
