import {
  authOptionalProcedure,
  authRequiredProcedure,
  Router,
} from "@api/lib/trpc"
import { goalSchemas } from "./schema"

export const router = Router({
  getGoal: authRequiredProcedure
    .input(goalSchemas.getGoal)
    .query((opts) => { }
    ),

  createGoal: authRequiredProcedure
    .input(goalSchemas.createGoal)
    .query((opts) => { }
    ),

  updateGoal: authRequiredProcedure
    .input(goalSchemas.updateGoal)
    .mutation((opts) => { }
    ),
})

export * as goalEndpoints from "./endpoints"

