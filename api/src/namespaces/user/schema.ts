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

export * as userSchemas from "./schema"

