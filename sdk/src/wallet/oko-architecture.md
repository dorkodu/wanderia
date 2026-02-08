# How Oko Works

## The Problem with Traditional Wallets[​](#the-problem-with-traditional-wallets "Direct link to The Problem with Traditional Wallets")

Traditional cryptocurrency wallets store a **single private key** that controls all user funds. This creates a fundamental security vulnerability:

* **Lost key = lost funds** (no recovery)
* **Stolen key = stolen funds** (no protection)
* **Complex backup** (seed phrases, hardware devices)
* **Single point of failure** (one vulnerability compromises everything)

## Oko's Solution: Multi-Party Computation[​](#okos-solution-multi-party-computation "Direct link to Oko's Solution: Multi-Party Computation")

Instead of one private key, Oko uses a **2-of-2 multi-party computation signing model** that distributes cryptographic control across multiple parties. No single entity can access user funds.

### How It Works[​](#how-it-works "Direct link to How It Works")

**Traditional Wallet:**

```text
[Single Private Key] → Sign Transaction

```

**Oko:**

![Oko Architecture](/img/oko-architecture.png)

```text
[Oko Key Share] + [User Key Share] → Sign Transaction

```

* **One key is managed by Oko**
* **The user key is cryptographically protected** and requires coordination from a decentralized validator set to enable signing

#### Key Share Lifecycle[​](#key-share-lifecycle "Direct link to Key Share Lifecycle")

Oko operates a 2-of-2 signing scheme where one key share stays with the Oko infrastructure while the other belongs to the end user. The user share is immediately split with **Shamir Secret Sharing (SSS)** and each fragment is stored on independent **Key Share Nodes**. When the user logs in, the client authenticates with each node (by presenting OAuth tokens) so the nodes can verify the user and release their encrypted fragments. The fragments are recombined **exactly once** during sign-in, remain on-device, and still represent only half of the full private key. For transaction signing, both key shares participate in a threshold signature protocol to produce a standard secp256k1 signature. See [Threshold ECDSA Concepts](/docs/v0/concepts/threshold-ecdsa.md) for details on the signing process.

**The master key (or private key) is never reconstructed or revealed at any point.** This ensures users retain full control without compromising on security, while eliminating the need to manage complex private keys themselves.

## Why This Matters for Your Integration[​](#why-this-matters-for-your-integration "Direct link to Why This Matters for Your Integration")

### 🔒 Enhanced Security for Your Users[​](#-enhanced-security-for-your-users "Direct link to 🔒 Enhanced Security for Your Users")

* **No single private key exists** - mathematically impossible for one party to steal funds
* **Distributed trust model** - multiple parties must cooperate to authorize transactions
* **Cryptographic guarantees** - security backed by proven threshold signature protocols

### 🚀 Better User Experience[​](#-better-user-experience "Direct link to 🚀 Better User Experience")

* **No browser extensions** - embedded directly in your application
* **Google OAuth login** - familiar authentication flow for mainstream users
* **Cross-device compatibility** - works on mobile, desktop, any browser
* **Seamless onboarding** - users don't need to learn about seed phrases or hardware wallets

### ⚡ Simple Integration[​](#-simple-integration "Direct link to ⚡ Simple Integration")

* **Drop-in replacement** - replace `window.ethereum` with Oko ethereum provider
* **Standard ECDSA signatures** - compatible with all existing blockchain infrastructure
* **Multi-chain support** - Ethereum and Cosmos ecosystems
* **Familiar APIs** - uses EIP-1193 and CosmJS standards

## Technical Implementation[​](#technical-implementation "Direct link to Technical Implementation")

### Cryptographic Foundation[​](#cryptographic-foundation "Direct link to Cryptographic Foundation")

**Protocol**: Cait-Sith threshold ECDSA with committed Beaver triples<br />**Implementation**: Rust core with WebAssembly and Node.js bindings<br />**Curve**: secp256k1 (standard Bitcoin/Ethereum curve)<br />**Standards**: Full EIP-1193 and CosmJS compatibility

### Integration Architecture[​](#integration-architecture "Direct link to Integration Architecture")

```text
Your dApp
    ↓
Oko SDK
    ↓
Distributed Key Shares → Threshold Signature → Blockchain

```

**For Ethereum:**

```typescript
import { OkoEthWallet } from "@oko-wallet/oko-sdk-eth";
import { createWalletClient, custom } from "viem";

// Initialize Oko Eth Wallet
const okoEthRes = OkoEthWallet.init({
  api_key: "your-api-key",
});

if (!okoEthRes.success) {
  throw new Error("Failed to initialize Oko Eth Wallet");
}

const okoEth = okoEthRes.data;

// Get provider
const provider = await okoEth.getEthereumProvider();

// Everything else stays the same
const walletClient = createWalletClient({
  transport: custom(provider),
});

```

**For Cosmos:**

```typescript
import { OkoCosmosWallet } from "@oko-wallet/oko-sdk-cosmos";

// Initialize Oko Cosmos Wallet
const okoCosmosRes = OkoCosmosWallet.init({
  api_key: "your-api-key",
});

if (!okoCosmosRes.success) {
  throw new Error("Failed to initialize Oko Cosmos Wallet");
}

const okoCosmos = okoCosmosRes.data;

// Get user accounts
const accounts = await okoCosmos.getAccounts();

```

### Security Model[​](#security-model "Direct link to Security Model")

**Isolation Boundaries:**

* Wallet UI runs in secure iframe context
* Key shares stored in separate, encrypted databases
* Authentication handled through Google OAuth

**Data Protection:**

* No single private key ever exists
* Key material distributed across multiple parties
* All operations cryptographically auditable

**Network Security:**

* TLS encryption for all communications
* CORS and security headers
* JWT-based authentication

## Competitive Advantages[​](#competitive-advantages "Direct link to Competitive Advantages")

### vs. MetaMask/Browser Extensions[​](#vs-metamaskbrowser-extensions "Direct link to vs. MetaMask/Browser Extensions")

* **Better Security**: No single private key vulnerability
* **Better UX**: No extension installation required
* **Cross-Platform**: Works on mobile and desktop

### vs. Custodial Wallets[​](#vs-custodial-wallets "Direct link to vs. Custodial Wallets")

* **Better Security**: Users maintain cryptographic control
* **Better Privacy**: No single entity can access funds
* **Better Compliance**: Distributed custody model

### vs. MPC Wallets[​](#vs-mpc-wallets "Direct link to vs. MPC Wallets")

* **Proven Cryptography**: Standard ECDSA signatures (not experimental)
* **Better Integration**: Drop-in replacement for existing wallet connections
* **Better Scalability**: Optimized threshold signature protocol

## Ready to Integrate?[​](#ready-to-integrate "Direct link to Ready to Integrate?")

**🚀 Quick Start**: [Integration Guide](/docs/v0/getting-started/integration-overview.md) - Add to your dApp in minutes<br />**📚 Examples**: [SDK Documentation](/docs/v0/sdk-usage/sdk-overview.md) - Copy-paste code samples<br />**🧩 Starter Templates**: [Starter Templates](/docs/v0/getting-started/starter-templates.md) - Ready-to-run examples<br />**🔍 Deep Dive**: [Threshold ECDSA Explained](/docs/v0/concepts/threshold-ecdsa.md) - Understanding the cryptography
