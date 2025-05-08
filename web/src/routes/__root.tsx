import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  Link,
  Outlet,
  createRootRouteWithContext,
  useRouterState,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

function RouterSpinner() {
  const isLoading = useRouterState({ select: (s) => s.status === 'pending' })
  return (isLoading ? <div>loading...</div> : <div>loaded!!!</div>)
}

export const Route = createRootRouteWithContext<{}>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className={`flex-1 border-l`}>
        {/* Render our first route match */}
        <Outlet />
      </div>

      <TanStackRouterDevtools position="bottom-right" />
      <ReactQueryDevtools buttonPosition="bottom-left" />
    </>
  )
}