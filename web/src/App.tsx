import { Outlet, createFileRoute, createRootRoute, createRoute, createRouter } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

import TanstackQueryLayout from "./integrations/tanstack-query/layout"
import * as TanstackQuery from "./integrations/tanstack-query/root-provider"

import Header from "./components/Header"
import { rootRoute } from "./routes/__root"

// File-based router
export const router = createRouter({
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

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
      <TanstackQueryLayout />
    </>
  )
}

export default App
