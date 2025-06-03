import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Hero } from "@web/components/hero";

export const Route = createFileRoute("/_www")({
  component: WebsiteLayout,
});

function WebsiteLayout() {
  return (
    <div>
      <Hero />
      <Outlet />
    </div>
  );
}
