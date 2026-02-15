import { createFileRoute } from "@tanstack/react-router";
import FAQ from "@web/components/www/faq";
import { Features } from "@web/components/www/features";
import { Hero } from "@web/components/www/hero";
import { LogoBar } from "@web/components/www/logo-bar";
import { SocialProof } from "@web/components/www/premium-sections";
import { StatsBanner } from "@web/components/www/stats-banner";

export const Route = createFileRoute("/_www/")({
  beforeLoad: async () => {
    /*
    const session = await authClient.getSession();
    if (session.data?.session) {
      throw redirect({ to: "/home", replace: true });
    }
    */
  },
  component: Page,
});

function Page() {
  return (
    <main>
      <Hero />
      <LogoBar />
      <Features />
      <StatsBanner />
      <SocialProof />
      <FAQ />
    </main>
  );
}
