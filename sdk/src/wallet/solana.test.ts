import { describe, expect, it } from "bun:test";
import {
  base58ToBytes,
  isValidSolanaAddress,
  shortenAddress
} from "./solana";

describe("Solana Utilities", () => {
  describe("isValidSolanaAddress", () => {
    it("validates correct Solana addresses", () => {
      // Standard Solana address format
      expect(isValidSolanaAddress("11111111111111111111111111111111")).toBe(true);
      expect(isValidSolanaAddress("So11111111111111111111111111111111111111111")).toBe(true);
    });

    it("rejects too short addresses", () => {
      expect(isValidSolanaAddress("abc")).toBe(false);
      expect(isValidSolanaAddress("12345")).toBe(false);
    });

    it("rejects addresses with invalid characters", () => {
      // Base58 excludes 0, O, I, l
      expect(isValidSolanaAddress("0OOOO0000000000000000000000000000")).toBe(false);
      expect(isValidSolanaAddress("IIII111111111111111111111111111")).toBe(false);
    });

    it("rejects too long addresses", () => {
      expect(isValidSolanaAddress("1".repeat(50))).toBe(false);
    });
  });

  describe("base58ToBytes", () => {
    it("decodes simple base58 strings", () => {
      const result = base58ToBytes("1");
      expect(result.isOk()).toBe(true);
      if (result.isOk()) {
        expect(result.value.length).toBeGreaterThan(0);
      }
    });

    it("decodes Solana system program address", () => {
      // System program is all ones (32 bytes of 0x00)
      const result = base58ToBytes("11111111111111111111111111111111");
      expect(result.isOk()).toBe(true);
      if (result.isOk()) {
        expect(result.value).toHaveLength(32);
      }
    });

    it("returns error for invalid characters", () => {
      const result = base58ToBytes("0OIl");
      expect(result.isErr()).toBe(true);
    });
  });

  describe("shortenAddress", () => {
    it("shortens long addresses", () => {
      const address = "7Np41oeYqPefeNQEHSv1UDhYrehxin3NStELsSKCT4K2";
      const shortened = shortenAddress(address);
      expect(shortened).toBe("7Np4...T4K2");
    });

    it("allows custom character count", () => {
      const address = "7Np41oeYqPefeNQEHSv1UDhYrehxin3NStELsSKCT4K2";
      expect(shortenAddress(address, 6)).toBe("7Np41o...CT4K2");
      expect(shortenAddress(address, 2)).toBe("7N...K2");
    });

    it("returns short addresses unchanged", () => {
      const shortAddress = "abc";
      expect(shortenAddress(shortAddress)).toBe("abc");
    });
  });
});
