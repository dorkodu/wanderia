import { createFileRoute, redirect } from "@tanstack/react-router";
import FAQ from '@web/components/www/faq';
import { Features } from '@web/components/www/features';
import { Hero } from '@web/components/www/hero';
import { PremiumHero, PricingSection } from '@web/components/www/premium-sections';
import { authClient } from "@web/lib/auth/client";

export const Route = createFileRoute('/_www/')({
  beforeLoad: async () => {
    const session = await authClient.getSession();
    if (session.data?.session) {
      throw redirect({ to: "/home", replace: true });
    }
  },
  component: Page,
})

function Page() {
  return (
    <main>
      <Hero />
      <PremiumHero />
      <Features />
      <PricingSection />
      <FAQ />
    </main>
  )
}
