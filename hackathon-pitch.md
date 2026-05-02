# Agent ID — Onchain Identity & Reputation for AI Agents

## The MVP (2 weeks)

A web app + Solana program where anyone can register an AI agent with an onchain identity, receive attestations, and build reputation. Ships with an Eliza plugin that auto-registers agents on deploy.

### Demo flow:
1. Open terminal — show an Eliza agent running
2. Open web app — paste the agent's pubkey, fill in name/description/capabilities, sign a tx
3. Agent gets an onchain identity profile (profile page with metadata, code hash, creator)
4. Another wallet attests: "I audited this agent" — reputation score updates in real-time
5. Query API: anyone can look up any agent's identity + attestations + reputation

### Tech stack:
- Solana program (Anchor): register agent, submit attestation, query reputation
- React frontend with wallet adapter
- Eliza plugin (TypeScript): auto-registers agent on deploy
- Optional: Arweave for offchain metadata (cheaper than storing everything onchain)

### Why you win:
- **Working demo** with real onchain transactions
- **Clear problem** — "Can I trust this agent?" is the #1 question in the ai16z ecosystem
- **Technical chops** — onchain program + Eliza plugin + frontend
- **Growth narrative** — "Eliza has 10k+ agents. None have identities. We plug into every one."
- **Billion dollar thesis** — Every agent in the future (billions) needs identity. Identity → reputation → commerce → full OS.

### Why this beats the other ideas:
| Idea | Build time | Demo wow factor | Win narrative |
|------|-----------|----------------|---------------|
| Agent ID | ~5 days | High (visual, interactive) | Strong |
| Agent Treasury | ~10 days | Medium (backend-heavy) | Medium |
| Commerce Protocol | ~12 days | Low (needs ecosystem) | Medium |

### The pitch to judges:
> "AI agents are the fastest-growing sector on Solana — $9.5B market cap, 50+ projects. But there's zero infrastructure for trust. When an agent says 'I'm an Eliza trading bot,' how do you verify? Agent ID is the identity layer. Register your agent once, build reputation through attestations, and prove what it really is. We plugin to every agent framework — Eliza goes first with 10k+ agents. From identity we expand into verifiable treasuries, agent commerce, and the full operating system for the agent economy. This is the Stripe of the agent world — infrastructure that every agent needs to participate."

### Why this can actually evolve into a billion-dollar company:
1. **Identity is foundational** — own the identity layer, own the ecosystem
2. **Network effects** — more agents → more attestations → more trust → more usage
3. **Expansion path** — identity → reputation → treasury (agents manage earnings) → commerce (agents transact)
4. **Revenue** — premium verification, enterprise attestation services, protocol fees on commerce
5. **Defensible** — attestation graph is hard to fork; network of attesters builds moat

