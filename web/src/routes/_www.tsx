import { IconBrandGithub, IconBrandInstagram, IconBrandTelegram, IconBrandTiktok, IconBrandTwitter } from "@tabler/icons-react";
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
              { name: "Overview", href: "/#overview" },
              { name: "Features", href: "/#features" },
              { name: "SDK", href: "/#sdk" },
              { name: "Docs", href: "/docs" },
            ],
          },
          {
            title: "Company",
            links: [
              { name: "About", href: "https://dorkodu.com" },
              { name: "Blog", href: "https://dorkodu.substack.com" },
              { name: "Open Source", href: "https://github.com/dorkodu" },
            ],
          },
        ]}
        description="The Superapp For Decentralized Communities"
        logo={{
          src: "/images/wanderia_Icon.svg",
          alt: "Wanderia Logo",
          title: "",
          url: "/"
        }}
        socialLinks={[
          { icon: <IconBrandTwitter />, href: "https://twitter.com/wanderiaxyz", label: "Twitter" },
          { icon: <IconBrandInstagram />, href: "https://instagram.com/wanderia.xyz", label: "Instagram" },
          { icon: <IconBrandTelegram />, href: "https://t.me/wanderia_xyz", label: "Telegram" },
          { icon: <IconBrandTiktok />, href: "https://tiktok.com/@wanderia.xyz", label: "TikTok" },
          { icon: <IconBrandGithub />, href: "https://github.com/dorkodu/wanderia", label: "GitHub" },
        ]}
      />
    </>
  );
}
