import App from "@/App"
import { createRootRoute } from "@tanstack/react-router"

export const rootRoute = createRootRoute({
  component: App,
})