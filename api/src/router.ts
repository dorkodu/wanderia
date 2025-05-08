import { Router } from "@api/lib/trpc"
import { gameEndpoints } from "./namespaces/game/endpoints"
import { goalEndpoints } from "./namespaces/goal/endpoints"
import { userEndpoints } from "./namespaces/user/endpoints"

export const router = Router({
  user: userEndpoints.router,
  game: gameEndpoints.router,
  goal: goalEndpoints.router,
})

export type AppRouter = typeof router
