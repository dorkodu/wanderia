import { authRequiredProcedure, Router } from "@api/lib/trpc";
import { goalSchemas } from "./schema";

export const router = Router({
  getGoal: authRequiredProcedure
    .input(goalSchemas.getGoal)
    .query(() => { }),
});

export * as goalEndpoints from "./endpoints";
