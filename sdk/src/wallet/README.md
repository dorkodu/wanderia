# Embedded Wallet SDK

A self-custodial, open-source embedded wallet solution for Solana. Generate wallets, sign transactions, and manage keys—all without third-party services.

## Features

- 🔐 **Secure Key Generation** - Ed25519 keys via Web Crypto API (non-extractable)
- 💾 **IndexedDB Storage** - Persistent wallet storage with Dexie
- 🌱 **BIP39 Mnemonic** - 12/24-word recovery phrases
- 🔒 **Encrypted Backups** - AES-GCM encrypted export/import
- ⚛️ **React Integration** - Hooks and Zustand store included
- 🟣 **Solana Ready** - Transaction signing compatible with @solana/kit

## Installation

```bash
# Dependencies are included in @dorkodu/wanderia-sdk
bun install
```

## Quick Start

```typescript
import { useWallet } from "@dorkodu/wanderia-sdk/wallet";

function WalletComponent() {
  const {
    activeWallet,
    wallets,
    createWallet,
    importFromMnemonic,
    signMessage
  } = useWallet();

  const handleCreate = async () => {
    const result = await createWallet("My Wallet");
    if (result.isOk()) {
      // ⚠️ IMPORTANT: Save mnemonic for recovery!
      console.log("Backup phrase:", result.value.mnemonic);
      console.log("Address:", result.value.wallet.publicKey);
    }
  };

  return (
    <div>
      {activeWallet && <p>Address: {activeWallet.publicKey}</p>}
      <button onClick={handleCreate}>Create Wallet</button>
    </div>
  );
}
```

## API Reference

### React Hook

```typescript
const {
  // State
  activeWallet,      // Current wallet or null
  wallets,           // All wallets
  isLoading,         // Loading state
  isInitialized,     // Whether storage was loaded

  // Actions
  createWallet,      // Create new wallet with mnemonic
  importFromMnemonic,// Import from recovery phrase
  importFromBackup,  // Import from encrypted backup
  exportWallet,      // Export encrypted backup
  signMessage,       // Sign arbitrary message
  selectWallet,      // Switch active wallet
  deleteWallet       // Delete wallet
} = useWallet();
```

### Wallet Service (Non-React)

```typescript
import {
  createWallet,
  importFromMnemonic,
  signMessage,
  getWallets
} from "@dorkodu/wanderia-sdk/wallet";

// Create wallet
const result = await createWallet("My Wallet");
// result: Result<{ wallet, mnemonic }, WalletError>

// Import from mnemonic
const imported = await importFromMnemonic(
  "Recovered Wallet",
  "abandon abandon abandon..."
);

// Sign message
const signature = await signMessage(walletID, messageBytes);
```

### Solana Utilities

```typescript
import {
  isValidSolanaAddress,
  shortenAddress,
  signTransaction,
  createSignedTransaction
} from "@dorkodu/wanderia-sdk/wallet";

// Validate address format
isValidSolanaAddress("So11111..."); // true

// Display shortened address
shortenAddress("7Np41oeYqPe...4K2"); // "7Np4...T4K2"

// Sign transaction message
const sig = await signTransaction(walletID, txMessageBytes);
```

### Crypto Utilities

```typescript
import {
  generateMnemonic,
  validateMnemonic,
  mnemonicToSeed,
  seedToKeyPair
} from "@dorkodu/wanderia-sdk/wallet";

// Generate 12-word mnemonic
const mnemonic = await generateMnemonic(128);

// Validate mnemonic phrase
const isValid = await validateMnemonic("word1 word2...");

// Derive key from mnemonic
const seed = await mnemonicToSeed(mnemonic);
const keyPair = await seedToKeyPair(seed);
```

## Security Model

### Non-Custodial

Private keys **never leave the browser**:

- Web Crypto keys are marked **non-extractable**
- Keys are stored in browser's IndexedDB
- No server-side key storage
- Mnemonic phrases enable recovery

### Best Practices

1. **Always save the mnemonic** - It's the only way to recover a WebCrypto wallet
2. **Use encrypted backups** - For cross-browser portability
3. **Clear on logout** - Call `deleteWallet()` when user logs out

## Browser Support

| Browser | Version | Notes |
|---------|---------|-------|
| Chrome | 113+ | Full Web Crypto Ed25519 |
| Safari | 17+ | Full Web Crypto Ed25519 |
| Firefox | 117+ | Full Web Crypto Ed25519 |
| Older | Any | Falls back to noble-ed25519 |

## Architecture

```
wallet/
├── index.ts       # Barrel exports
├── types.ts       # TypeScript interfaces
├── errors.ts      # Typed error factories
├── crypto.ts      # Key generation, signing, BIP39
├── storage.ts     # Dexie IndexedDB layer
├── service.ts     # Wallet operations
├── solana.ts      # Solana-specific utilities
├── store.ts       # Zustand state store
└── hooks/
    └── useWallet.ts
```

## Testing

```bash
# Run all wallet tests
bun test sdk/src/wallet/

# Run specific test file
bun test sdk/src/wallet/crypto.test.ts
```

## License

MIT
