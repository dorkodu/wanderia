import { describe, expect, it } from "bun:test";
import {
  base64ToBytes,
  bytesToBase64,
  generateMnemonic,
  generateWalletID,
  isWebCryptoSupported,
  mnemonicToSeed,
  seedToKeyPair,
  signWithNoble,
  validateMnemonic
} from "./crypto";

describe("Wallet Crypto", () => {
  describe("generateWalletID", () => {
    it("generates a 32-character hex string", () => {
      const id = generateWalletID();
      expect(id).toHaveLength(32);
      expect(/^[0-9a-f]+$/.test(id)).toBe(true);
    });

    it("generates unique IDs", () => {
      const id1 = generateWalletID();
      const id2 = generateWalletID();
      expect(id1).not.toBe(id2);
    });
  });

  describe("bytesToBase64 / base64ToBytes", () => {
    it("encodes bytes to base64", () => {
      const bytes = new Uint8Array([72, 101, 108, 108, 111]); // "Hello"
      const base64 = bytesToBase64(bytes);
      expect(base64).toBe("SGVsbG8=");
    });

    it("decodes base64 to bytes", () => {
      const base64 = "SGVsbG8=";
      const bytes = base64ToBytes(base64);
      expect(Array.from(bytes)).toEqual([72, 101, 108, 108, 111]);
    });

    it("roundtrips bytes correctly", () => {
      const original = new Uint8Array([1, 2, 3, 255, 0, 128]);
      const encoded = bytesToBase64(original);
      const decoded = base64ToBytes(encoded);
      expect(Array.from(decoded)).toEqual(Array.from(original));
    });
  });

  describe("generateMnemonic", () => {
    it("generates a 12-word mnemonic by default", async () => {
      const result = await generateMnemonic(128);
      expect(result.isOk()).toBe(true);
      if (result.isOk()) {
        const words = result.value.split(" ");
        expect(words).toHaveLength(12);
      }
    });

    it("generates a 24-word mnemonic with 256-bit strength", async () => {
      const result = await generateMnemonic(256);
      expect(result.isOk()).toBe(true);
      if (result.isOk()) {
        const words = result.value.split(" ");
        expect(words).toHaveLength(24);
      }
    });

    it("generates unique mnemonics", async () => {
      const result1 = await generateMnemonic(128);
      const result2 = await generateMnemonic(128);
      expect(result1.isOk()).toBe(true);
      expect(result2.isOk()).toBe(true);
      if (result1.isOk() && result2.isOk()) {
        expect(result1.value).not.toBe(result2.value);
      }
    });
  });

  describe("validateMnemonic", () => {
    it("validates a correct 12-word mnemonic", async () => {
      // Generate a valid mnemonic first
      const genResult = await generateMnemonic(128);
      expect(genResult.isOk()).toBe(true);
      if (genResult.isOk()) {
        const validResult = await validateMnemonic(genResult.value);
        expect(validResult.isOk()).toBe(true);
        if (validResult.isOk()) {
          expect(validResult.value).toBe(true);
        }
      }
    });

    it("rejects invalid word count", async () => {
      const result = await validateMnemonic("word1 word2 word3");
      expect(result.isOk()).toBe(true);
      if (result.isOk()) {
        expect(result.value).toBe(false);
      }
    });

    it("rejects invalid words", async () => {
      const result = await validateMnemonic(
        "invalid notaword xyz123 test fake words here now more stuff again end"
      );
      expect(result.isOk()).toBe(true);
      if (result.isOk()) {
        expect(result.value).toBe(false);
      }
    });
  });

  describe("mnemonicToSeed", () => {
    it("derives a 64-byte seed from mnemonic", async () => {
      const genResult = await generateMnemonic(128);
      expect(genResult.isOk()).toBe(true);
      if (genResult.isOk()) {
        const seedResult = await mnemonicToSeed(genResult.value);
        expect(seedResult.isOk()).toBe(true);
        if (seedResult.isOk()) {
          expect(seedResult.value).toHaveLength(64);
        }
      }
    });

    it("derives deterministic seed from same mnemonic", async () => {
      const mnemonic = "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about";
      const seed1 = await mnemonicToSeed(mnemonic);
      const seed2 = await mnemonicToSeed(mnemonic);
      expect(seed1.isOk()).toBe(true);
      expect(seed2.isOk()).toBe(true);
      if (seed1.isOk() && seed2.isOk()) {
        expect(Array.from(seed1.value)).toEqual(Array.from(seed2.value));
      }
    });

    it("derives different seeds with different passphrases", async () => {
      const mnemonic = "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about";
      const seed1 = await mnemonicToSeed(mnemonic, "");
      const seed2 = await mnemonicToSeed(mnemonic, "password");
      expect(seed1.isOk()).toBe(true);
      expect(seed2.isOk()).toBe(true);
      if (seed1.isOk() && seed2.isOk()) {
        expect(Array.from(seed1.value)).not.toEqual(Array.from(seed2.value));
      }
    });
  });

  describe("seedToKeyPair", () => {
    it("derives a valid Ed25519 key pair from seed", async () => {
      const genResult = await generateMnemonic(128);
      expect(genResult.isOk()).toBe(true);
      if (genResult.isOk()) {
        const seedResult = await mnemonicToSeed(genResult.value);
        expect(seedResult.isOk()).toBe(true);
        if (seedResult.isOk()) {
          const keyPairResult = await seedToKeyPair(seedResult.value);
          expect(keyPairResult.isOk()).toBe(true);
          if (keyPairResult.isOk()) {
            expect(keyPairResult.value.publicKey).toHaveLength(32);
            expect(keyPairResult.value.privateKey).toHaveLength(32);
          }
        }
      }
    });

    it("derives deterministic key pair from same seed", async () => {
      const mnemonic = "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about";
      const seedResult = await mnemonicToSeed(mnemonic);
      expect(seedResult.isOk()).toBe(true);
      if (seedResult.isOk()) {
        const keyPair1 = await seedToKeyPair(seedResult.value);
        const keyPair2 = await seedToKeyPair(seedResult.value);
        expect(keyPair1.isOk()).toBe(true);
        expect(keyPair2.isOk()).toBe(true);
        if (keyPair1.isOk() && keyPair2.isOk()) {
          expect(Array.from(keyPair1.value.publicKey)).toEqual(
            Array.from(keyPair2.value.publicKey)
          );
          expect(Array.from(keyPair1.value.privateKey)).toEqual(
            Array.from(keyPair2.value.privateKey)
          );
        }
      }
    });
  });

  describe("signWithNoble", () => {
    it("signs a message and produces 64-byte signature", async () => {
      const mnemonic = "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about";
      const seedResult = await mnemonicToSeed(mnemonic);
      expect(seedResult.isOk()).toBe(true);
      if (seedResult.isOk()) {
        const keyPairResult = await seedToKeyPair(seedResult.value);
        expect(keyPairResult.isOk()).toBe(true);
        if (keyPairResult.isOk()) {
          const message = new TextEncoder().encode("Hello, Solana!");
          const signResult = await signWithNoble(keyPairResult.value.privateKey, message);
          expect(signResult.isOk()).toBe(true);
          if (signResult.isOk()) {
            expect(signResult.value).toHaveLength(64);
          }
        }
      }
    });

    it("produces deterministic signatures for same message", async () => {
      const mnemonic = "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about";
      const seedResult = await mnemonicToSeed(mnemonic);
      expect(seedResult.isOk()).toBe(true);
      if (seedResult.isOk()) {
        const keyPairResult = await seedToKeyPair(seedResult.value);
        expect(keyPairResult.isOk()).toBe(true);
        if (keyPairResult.isOk()) {
          const message = new TextEncoder().encode("Test message");
          const sig1 = await signWithNoble(keyPairResult.value.privateKey, message);
          const sig2 = await signWithNoble(keyPairResult.value.privateKey, message);
          expect(sig1.isOk()).toBe(true);
          expect(sig2.isOk()).toBe(true);
          if (sig1.isOk() && sig2.isOk()) {
            expect(Array.from(sig1.value)).toEqual(Array.from(sig2.value));
          }
        }
      }
    });
  });

  describe("isWebCryptoSupported", () => {
    it("returns a boolean", async () => {
      const result = await isWebCryptoSupported();
      expect(typeof result).toBe("boolean");
    });
  });
});
