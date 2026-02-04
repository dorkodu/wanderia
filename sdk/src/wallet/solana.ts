/**
 * Solana blockchain utilities for the embedded wallet SDK.
 *
 * This module provides helpers for working with Solana addresses,
 * transactions, and the @solana/kit library.
 */

import type { Result } from "neverthrow";
import { err, ok } from "neverthrow";
import { cryptoNotSupportedError } from "./errors";
import { signMessage as signMessageService } from "./service";
import type { Wallet, WalletError } from "./types";

/** Base58 alphabet for Solana addresses */
const ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

/**
 * Validates a Solana address format.
 * Solana addresses are base58-encoded Ed25519 public keys (32 bytes = ~44 chars).
 */
export function isValidSolanaAddress(address: string): boolean {
  if (address.length < 32 || address.length > 44) {
    return false;
  }

  for (const char of address) {
    if (!ALPHABET.includes(char)) {
      return false;
    }
  }

  return true;
}

/**
 * Decodes a base58-encoded Solana address to bytes.
 */
export function base58ToBytes(base58: string): Result<Uint8Array, WalletError> {
  try {
    const bytes: number[] = [];

    for (const char of base58) {
      let carry = ALPHABET.indexOf(char);
      if (carry < 0) {
        return err(cryptoNotSupportedError(`Invalid base58 character: ${char}`));
      }

      for (let j = 0; j < bytes.length; j++) {
        carry += bytes[j]! * 58;
        bytes[j] = carry & 0xff;
        carry >>= 8;
      }

      while (carry > 0) {
        bytes.push(carry & 0xff);
        carry >>= 8;
      }
    }

    // Handle leading zeros
    for (const char of base58) {
      if (char === "1") {
        bytes.push(0);
      } else {
        break;
      }
    }

    return ok(new Uint8Array(bytes.reverse()));
  } catch (error) {
    return err(
      cryptoNotSupportedError(
        error instanceof Error ? error.message : "Failed to decode base58"
      )
    );
  }
}

/**
 * Gets the public key bytes from a wallet address.
 */
export function getPublicKeyBytes(wallet: Wallet): Result<Uint8Array, WalletError> {
  return base58ToBytes(wallet.publicKey);
}

/**
 * Signs a Solana transaction message.
 *
 * @param walletID - The wallet ID to sign with
 * @param transactionMessage - The serialized transaction message bytes
 * @returns The Ed25519 signature (64 bytes)
 */
export async function signTransaction(
  walletID: string,
  transactionMessage: Uint8Array
): Promise<Result<Uint8Array, WalletError>> {
  return signMessageService(walletID, transactionMessage);
}

/**
 * Creates a signed transaction object compatible with @solana/kit.
 *
 * @param walletID - The wallet ID to sign with
 * @param transactionMessage - The serialized transaction message bytes
 * @param wallet - The wallet object (for public key)
 * @returns Object with signature and public key bytes
 */
export async function createSignedTransaction(
  walletID: string,
  transactionMessage: Uint8Array,
  wallet: Wallet
): Promise<
  Result<{ signature: Uint8Array; publicKey: Uint8Array }, WalletError>
> {
  const signatureResult = await signTransaction(walletID, transactionMessage);
  if (signatureResult.isErr()) {
    return err(signatureResult.error);
  }

  const publicKeyResult = getPublicKeyBytes(wallet);
  if (publicKeyResult.isErr()) {
    return err(publicKeyResult.error);
  }

  return ok({
    signature: signatureResult.value,
    publicKey: publicKeyResult.value
  });
}

/**
 * Creates an address info object for use with @solana/kit transaction building.
 *
 * @param wallet - The wallet to get address info for
 * @returns Address info object compatible with @solana/kit
 */
export function getAddressInfo(
  wallet: Wallet
): { address: string; publicKeyBytes: Result<Uint8Array, WalletError> } {
  return {
    address: wallet.publicKey,
    publicKeyBytes: base58ToBytes(wallet.publicKey)
  };
}

/**
 * Shortens a Solana address for display purposes.
 *
 * @param address - The full Solana address
 * @param chars - Number of characters to show at start and end (default: 4)
 * @returns Shortened address like "Abc1...xyz9"
 */
export function shortenAddress(address: string, chars: number = 4): string {
  if (address.length <= chars * 2 + 3) {
    return address;
  }
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}
