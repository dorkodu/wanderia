import { Router } from "@api/lib/trpc"

import { userEndpoints } from "@api/namespaces/user/endpoints"

export const appRouter = Router({
  user: userEndpoints.router,
})

export type AppRouter = typeof appRouter;