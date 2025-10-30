import {
  Router,
  authOptionalProcedure,
  authRequiredProcedure,
} from "@api/lib/trpc";
import * as userRepository from "./repository";
import { userSchemas } from "./schema";

export const router = Router({
  getUser: authOptionalProcedure
    .input(userSchemas.getUser)
    .query((opts) => { }),

  checkUsernameAvailability: authOptionalProcedure
    .input(userSchemas.checkUsernameAvailability)
    .query(async (opts) => {
      const { username } = opts.input;
      const isAvailable = await userRepository.checkUsernameAvailability(username);
      return { available: isAvailable };
    }),

  updateUser: authRequiredProcedure
    .input(userSchemas.updateUser)
    .mutation((opts) => { }),

  getSettings: authRequiredProcedure
    .input(userSchemas.getSettings)
    .query(async (opts) => {
      // TODO: replace with real session user id
      const userId = "demo-user" // (opts.ctx.session as any)?.userId
      return userRepository.getSettings(userId)
    }),

  updateSettings: authRequiredProcedure
    .input(userSchemas.updateSettings)
    .mutation(async (opts) => {
      const userId = "demo-user" // (opts.ctx.session as any)?.userId
      return userRepository.updateSettings(userId, opts.input)
    }),
})

export * as userEndpoints from "./endpoints";

