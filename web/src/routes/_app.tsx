import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { authClient } from "@web/lib/auth/client";

export const Route = createFileRoute("/_app")({



  beforeLoad: async ({ location }) => {
    const session = await authClient.getSession();

    if (!session.data?.session) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: AppLayout,
});

import { MobileBottomBar } from "@web/components/app/layout/mobile-bottom-bar";
import { MobileTopBar } from "@web/components/app/layout/mobile-top-bar";
import { SidebarLeft } from "@web/components/app/layout/sidebar-left";
import { SidebarRight } from "@web/components/app/layout/sidebar-right";
import { OnboardingGuard } from "@web/components/guards/onboarding-guard";
import { SidebarInset, SidebarProvider } from "@web/components/ui/sidebar";
import { Toaster } from "@web/components/ui/sonner";
import { Spotlight } from "@web/lib/spotlight";

function AppLayout() {
  return (
    <OnboardingGuard>
      <main className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-6xl">

          <SidebarProvider>
            <SidebarLeft />
            <SidebarInset>

              <MobileTopBar />

              {/* Desktop Header - hidden on mobile */}
              <header className="bg-background sticky top-0 hidden lg:flex h-14 shrink-0 items-center gap-2">
                <div className="flex flex-1 items-center justify-center gap-2 px-3 pt-2">
                  <Spotlight />
                </div>
              </header>

              {/* Main Content - with mobile padding for top and bottom bars */}
              <div className="flex flex-1 flex-col gap-4 px-1 pt-16 pb-20 lg:pt-4 lg:pb-4">
                <Outlet />
              </div>
            </SidebarInset>
            <SidebarRight />
          </SidebarProvider>

          {/* Mobile Bottom Bar */}
          <MobileBottomBar />

        </div>
      </main>
      <Toaster />
    </OnboardingGuard>
  )
}