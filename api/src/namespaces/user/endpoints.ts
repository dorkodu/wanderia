import {
  Router,
  authOptionalProcedure,
  authRequiredProcedure,
} from "@api/lib/trpc";
import * as userRepository from "./repository";
import * as userService from "./repository";
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
})

export * as userEndpoints from "./endpoints";

