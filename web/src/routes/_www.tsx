import { IconBrandGithub, IconBrandInstagram, IconBrandTelegram, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Footer } from "@web/components/www/footer";
import { Header } from "@web/components/www/header";

export const Route = createFileRoute("/_www")({
  component: WebsiteLayout,
});

function WebsiteLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer
        copyright={`© Dorkodu, ${new Date().getFullYear()}`}
        legalLinks={[
          { name: "Terms of Service", href: "/legal/terms-of-service" },
          { name: "Privacy Policy", href: "/legal/privacy-policy" },
          { name: "Community Rules", href: "/legal/community-rules" },
          { name: "Cookie Policy", href: "/legal/cookie-policy" },
        ]}
        sections={[
          {
            title: "Product",
            links: [
              { name: "Features", href: "/#features" },
              { name: "Pricing", href: "/#pricing" },
              { name: "Docs", href: "/docs" },
            ],
          },
          {
            title: "Company",
            links: [
              { name: "About", href: "/about" },
              { name: "Blog", href: "https://dorkodu.substack.com" },
              { name: "Open Source", href: "https://github.com/dorkodu" },
            ],
          },
        ]}
        description="The launchpad & OS for agentic, onchain businesses."
        logo={{
          src: "/images/wanderia_Brand_White.svg",
          alt: "Wanderia",
          title: "Wanderia",
          url: "/",
        }}
        socialLinks={[
          { icon: <IconBrandTwitter className="size-4" />, href: "https://twitter.com/wanderia", label: "Twitter" },
          { icon: <IconBrandInstagram className="size-4" />, href: "https://instagram.com/wanderia", label: "Instagram" },
          { icon: <IconBrandTelegram className="size-4" />, href: "https://t.me/dorkodu", label: "Telegram" },
          { icon: <IconBrandYoutube className="size-4" />, href: "https://youtube.com/@dorkodu", label: "YouTube" },
          { icon: <IconBrandGithub className="size-4" />, href: "https://github.com/dorkodu", label: "GitHub" },
        ]}
      />
    </>
  );
}
