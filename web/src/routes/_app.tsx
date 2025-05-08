import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/_app")({
  component: AppLayout,
})

function AppLayout() {
  return (
    <div>
      <h1>App Layout</h1>
      <Outlet />
    </div>
  )
}
