import {
  Outlet,
  createFileRoute,
  createRootRoute,
  createRouter,
} from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import Header from "./components/Header"
import TanstackQueryLayout from "./integrations/tanstack-query/layout"
import * as TanstackQuery from "./integrations/tanstack-query/root-provider"

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
      <TanstackQueryLayout />
    </>
  ),
})

// File-based router
export const router = createFileRouter({
  routeTree: rootRoute,
  context: {
    ...TanstackQuery.getContext(),
  },
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
