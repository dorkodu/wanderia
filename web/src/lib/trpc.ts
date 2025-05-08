import type { AppRouter } from "@api/router"
import { createTRPCClient, httpBatchLink } from "@trpc/client"
import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query'
import { trpcApiUrl } from "../config"
import { queryClient } from "./tanstack-query"

const trpcClient = createTRPCClient<AppRouter>({
  links: [httpBatchLink({ url: trpcApiUrl })],
})

export const trpc = createTRPCOptionsProxy<AppRouter>({
  client: trpcClient,
  queryClient,
})