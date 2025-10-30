import { Router } from "@api/lib/trpc"

import { gameEndpoints } from "@api/namespaces/game/endpoints"
import { goalEndpoints } from "@api/namespaces/goal/endpoints"
import { momentumEndpoints } from "@api/namespaces/momentum/endpoints"
import { userEndpoints } from "@api/namespaces/user/endpoints"

export const appRouter = Router({
  user: userEndpoints.router,
  game: gameEndpoints.router,
  goal: goalEndpoints.router,
  momentum: momentumEndpoints.router,
})

export type AppRouter = typeof appRouter;