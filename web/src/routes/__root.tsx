import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { AppSpotlightProvider } from "@web/components/app/spotlight";
import { Toaster } from "@web/components/ui/sonner";
import ModalsProvider from "@web/lib/modals/provider";

export const Route = createRootRouteWithContext<{}>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <ModalsProvider>
      <AppSpotlightProvider>
        <Outlet />
        {/* <TanStackRouterDevtools position="bottom-right" /> */}
        <Toaster />
      </AppSpotlightProvider>
    </ModalsProvider>
  );
}
