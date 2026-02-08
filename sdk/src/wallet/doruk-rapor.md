# Oko Wallet Framework Analysis & Solana SDK Design

## 1. Oko Framework Analysis

### Architecture Overview
Oko is an **embedded wallet framework** designed to provide a seamless "1 user = 1 wallet" experience. It uses an **iframe-based architecture** to isolate sensitive key operations from the host application while maintaining a smooth user experience.

*   **SDK (`oko_sdk_core`)**: A lightweight TypeScript library that runs in the host application. It creates an invisible `<iframe>` pointing to the Wallet Host and establishes a `MessageChannel` for communication. It handles the "Client" side of the wallet.
*   **Wallet Host (`oko_attached`)**: A React application that runs inside the iframe. It is responsible for:
    *   Managing the user's private key shares.
    *   Rendering UI for approval flows (popups/modals) when needed.
    *   Communicating with the Key Share Nodes (KSN).
    *   Executing cryptographic operations (signing).
*   **Key Share Nodes (KSN)**: A set of backend servers (typically 3) that implement **Threshold Signature Schemes (TSS)** (specifically FROST for Ed25519 and potentially ECDSA variants).
    *   **Security Model**: The user's private key is never fully reconstructed in one place (conceptually). Instead, shares are distributed. The user's device holds a share, and the KSNs hold shares. Signing requires a threshold of shares.
    *   **Self-Hosting**: The architecture allows running your own KSNs to be the custodian of the "recovery" or "co-signing" shares.

### Codebase Structure
*   `sdk/oko_sdk_core`: The abstract base class `OkoWallet`. Handles iframe injection (`iframe/`), event messaging (`window_msg/`), and basic auth.
*   `sdk/oko_sdk_svm`: The Solana implementation. Currently wraps `@solana/web3.js` (legacy) and implements the `@wallet-standard` interfaces.
*   `embed/oko_attached`: The "Wallet OS". It’s a Vite+React app. It uses `tanstack-router` for views. It imports logic from `crypto/` to handle the heavy lifting of TSS.
*   `key_share_node`: The backend server. Built with Express (but migrating to something newer/lighter would be good). Uses Postgres for state. It implements the server-side of the MPC protocol.

### Key Learnings for Trekie
1.  **Isolation is Key**: Even for an "embedded" wallet, you don't want the host app (your main app) to have direct access to the private key in memory. The iframe sandbox protects the key from XSS attacks on the main app.
2.  **MPC is Complex**: Oko's reliance on multiple KSNs (Key Share Nodes) is robust but operationally heavy for a "self-hostable" simple setup.
3.  **Standardization**: Oko implements `@wallet-standard`, which allows the embedded wallet to act like a normal injected wallet (like Phantom) to other dApps if desired.

---

## 2. Design A: From-Scratch Solana SDK (The "Trekie" Way)

**Philosophy**: "Simplicity & Modern Standards". Instead of heavy MPC with multiple nodes, we will use **Passkeys (WebAuthn)** for hardware-backed security + **Encrypted Local Storage** for session keys. This is much easier to self-host (stateless-ish backend) and offers "1 Click" onboarding.

**Stack**:
*   **Libs**: `@solana/kit`, `gill` (for primitives), `zod` (validation).
*   **Frontend**: React, TanStack Query.
*   **Backend**: Bun, Elysia, Postgres (for account recovery/metadata).

### Architecture

#### Module 1: `@trek-wallet/core` (The Primitives)
A pure TS library, no UI.
*   **`KeyManager`**: Handles generating Ed25519 keypairs. Uses `gill` for key manipulation.
*   **`StorageEngine`**: Abstract interface for storing encrypted keys (IndexedDB, LocalStorage).
*   **`SecureEnclave`**: A wrapper around WebAuthn (Passkeys). It uses the device's secure element to sign a "session key" or the transaction directly.

#### Module 2: `@trek-wallet/host` (The Wallet OS)
The invisible iframe app (served from `wallet.trekie.io`).
*   **Role**: Holds the master material.
*   **State**: Uses `zustand`.
*   **Communication**: Exposes a JSON-RPC interface via `window.postMessage`.
*   **Onboarding**:
    1.  User enters email.
    2.  App checks if wallet exists.
    3.  If new -> Create Passkey -> Generate Ed25519 Key -> Encrypt Key with Passkey -> Store in DB (encrypted) & LocalStorage.
    4.  If existing -> Prompt Passkey -> Decrypt Key -> Load into memory.

#### Module 3: `@trek-wallet/sdk` (The Consumer)
The npm package you install in your app.
*   **`TrekProvider`**: React Context provider.
*   **`useWallet()`**: Returns `{ address, signTransaction, signMessage, balance }`.
*   **`connect()`**: Injects the iframe (if not present) and performs the handshake.
*   **`@solana/wallet-standard`**: Implements the standard so it works with `useWallet` hooks from the ecosystem.

#### Module 4: `@trek-wallet/api` (The Backend)
*   **Routes**: `/auth/challenge` (for Passkey), `/wallet/sync` (for encrypted backups).
*   **Database**: `users` table (email, wallet_address, encrypted_key_blob). **NON-CUSTODIAL** (server cannot read key).

### User Experience (DX/UX)
*   **Dev**: `npm install @trek-wallet/sdk`. Wrap app in `<TrekProvider>`. Done.
*   **User**: "Sign in with Google/Email". A wild Passkey prompt appears. "Touch ID". Done. Wallet created.

---

## 3. Design B: Adding Solana Support to Oko (Modernized)

**Goal**: Refactor `oko_sdk_svm` to use modern primitives and fit the "Trekie" stack constraints where possible.

### Step 1: Replace Dependencies in `oko_sdk_svm`
Remove `@solana/web3.js` (v1). Install `@solana/kit` and `gill`.

**Refactoring `sign_transaction.ts`**:
*   **Old**: Received a `Transaction` or `VersionedTransaction` object (legacy classes).
*   **New**: Accept `CompilableTransactionMessage` or raw `Uint8Array` bytes.
*   **Bridge**: Since the iframe (`oko_attached`) might still expect certain formats, the SDK must serialize the new `@solana/kit` objects into raw bytes or a JSON format that the iframe understands.

### Step 2: Update `oko_attached` (The Host)
The iframe app needs to know how to sign Solana transactions using the generated MPC shares.
*   **Current State**: It uses `makeSignature` which likely calls the KSN.
*   **Update**: Ensure the `makeSignature` flow creates a valid Ed25519 signature compatible with Solana.
*   **Serialization**: Use `@solana/kit`'s `getb64encodedTransaction` or similar helpers to prepare the transaction for broadcasting.

### Step 3: API / KSN Updates
*   Ensure the `key_share_node` (Postgres/Express) creates `Ed25519` key shares by default for new users (if not already).
*   (Optional) Rewrite KSN in **Bun + Elysia** to match your stack preference. This would be a "Trekie-flavored" fork of the KSN.

### Implementation Plan for Design B

1.  **Fork `oko_sdk_svm`** to `@trek-wallet/sdk-svm`.
2.  **Define Interface**:
    ```typescript
    import { Address, Transaction } from '@solana/kit';
    
    export interface TrekSolanaWallet {
      address: Address;
      signTransaction(tx: Transaction): Promise<Transaction>;
    }
    ```
3.  **Implement Serialization**:
    In the SDK, before sending to iframe:
    ```typescript
    // Convert Kit Transaction to base64/bytes
    const serialized = serializeTransaction(tx);
    iframe.postMessage({ type: 'sign_solana', payload: serialized });
    ```
4.  **Implement Deserialization (Host)**:
    In `oko_attached`, receive bytes.
    Use `gill` to verify the transaction structure (optional).
    Sign the message hash using the MPC share.
    Return the signature.
5.  **Reconstruct**:
    Back in SDK, append signature to the `Transaction` object.

### Recommendation
If you want **full control** and a simpler stack (Passkeys vs MPC), go with **Design A**. It aligns perfectly with your "Bun/Elysia/React" stack and avoids the operational complexity of running 3 Key Share Nodes.

If you specifically need **MPC** (e.g., for enterprise-grade security or social recovery without device dependency), use **Design B** but modernize the KSN backend.
