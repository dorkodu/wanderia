import { IconBrandInstagram, IconBrandTelegram, IconBrandTwitter } from "@tabler/icons-react";
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
        copyright={`Dorkodu, ${new Date().getFullYear()}`}
        legalLinks={[
          { name: "Terms and Conditions", href: "/legal/terms-of-service" },
          { name: "Privacy Policy", href: "/legal/privacy-policy" },
          { name: "Community Rules", href: "/legal/community-rules" },
          { name: "Cookie Policy", href: "/legal/cookie-policy" },
        ]}
        sections={[
          {
            title: "Product",
            links: [
              { name: "Superapp", href: "/#superapp" },
              { name: "Protocol", href: "/#protocol" },
              { name: "Features", href: "/#features" },
              { name: "Docs", href: "https://github.com/dorkodu/wanderia" },
            ],
          },
          {
            title: "Company",
            links: [
              { name: "About", href: "https://dorkodu.com" },
              { name: "Blog", href: "https://dorkodu.substack.com" },
            ],
          },
        ]}
        description="The Decentralized Superapp for Regenerative Communities"
        logo={{
          src: "/images/wanderia_Brand_White.svg",
          alt: "Wanderia Logo",
          title: "",
          url: "/"
        }}
        socialLinks={[
          { icon: <IconBrandInstagram />, href: "https://instagram.com/wanderia.xyz", label: "Instagram" },
          { icon: <IconBrandTwitter />, href: "https://twitter.com/wanderia_xyz", label: "Twitter" },
          { icon: <IconBrandTelegram />, href: "https://t.me/wanderia", label: "Telegram" },
        ]}
      />
    </>
  );
}
