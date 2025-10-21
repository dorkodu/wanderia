import { commonSchemas } from "@api/commons/schemas"
import * as z from "zod/v4"

export const getUser = z.strictObject({
  username: commonSchemas.username.optional(),
})

export const checkUsernameAvailability = z.strictObject({
  username: commonSchemas.username,
})

export const updateUser = z.strictObject({
  username: commonSchemas.username,
})

export const updateProfile = z.strictObject({

})

// Settings Schemas
export const getSettings = z.strictObject({})

// Partial update for settings allowing nested partial objects
export const updateSettings = z.strictObject({
  preferences: z
    .object({
      theme: z.enum(["light", "dark", "system"]).optional(),
      language: z.string().max(10).optional(),
    })
    .partial()
    .optional(),
  config: z
    .object({
      notificationsEmail: z.boolean().optional(),
    })
    .partial()
    .optional(),
  onboarding: z
    .object({
      completed: z.boolean().optional(),
      step: z.number().int().min(0).optional(),
    })
    .partial()
    .optional(),
})

export * as userSchemas from "./schema"

