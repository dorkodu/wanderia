import type { Address, NostrPublicKey, SocialProfile, SolanaPublicKey } from "./src/types";
export * from "./src/lib/account";
export * from "./src/nostr";
export * from "./src/nostr-react";

export function hello(): string {
  return "Hello from Wanderia SDK!";
}

// Example: create a social profile
export function createSocialProfile(profile: SocialProfile): SocialProfile {
  // In a real SDK, this would interact with the decentralized protocol
  return profile;
}

export type { Address, NostrPublicKey, SocialProfile, SolanaPublicKey };

console.log("Hello via Bun!");