import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@web/components/www/cta-section";
import FAQ from "@web/components/www/faq";
import { Features, Punchline, SovereignAIAgents } from "@web/components/www/features";
import { Hero } from "@web/components/www/hero";
import { PremiumHero, PricingSection } from "@web/components/www/premium-sections";
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
    <main className="overflow-hidden">
      {/* Hero - Full viewport with animated background */}
      <Hero />

      {/* Stats Banner - Social proof */}
      <StatsBanner />

      {/* Premium Hero - Quick premium pitch */}
      <PremiumHero />

      {/* Features - Bento grid */}
      <Features />

      {/* Punchline - Launch/Manage/Reward steps */}
      <Punchline />

      {/* AI Agents section */}
      <SovereignAIAgents />

      {/* Pricing */}
      <PricingSection />

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <CTASection />
    </main>
  );
}
