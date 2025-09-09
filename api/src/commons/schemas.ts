import * as z from "zod/v4";

export const id = z.ulid()
export const direction = z.enum(["forward", "backward"])

export const name = z
  .string()
  .trim()
  .min(1, { error: "Name must be minimum 1 character." })
  .max(64, { error: "Name must be maximum 64 characters." })

/**
 * Regex error message is stripped down to be easier to understand.
 * min() & max() statements come last so they are checked first.
 */
export const username = z
  .string()
  .trim()
  .regex(
    /^(?![_.])(?!.*[_.]{2})([a-zA-Z0-9_.]{1,16})(?<![_.])$/,
    { error: "Username can only contain letters or numbers." }
  )
  .min(1, { error: "Name must be minimum 1 character." })
  .max(16, { error: "Name must be maximum 16 characters." })

export const email = z.email().trim().max(320)

export const password = z
  .string()
  .min(8, { error: "Password must be minimum 8 characters." })

export const order = z.number().int().min(0).max(Number.MAX_SAFE_INTEGER)

export * as commonSchemas from "./schemas";

