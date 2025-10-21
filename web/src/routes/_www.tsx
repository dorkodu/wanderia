import { IconBrandInstagram, IconBrandTelegram, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";
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
        description="Your Gamified Life Dashboard & AI Productivity Companion"
        logo={{
          src: "/images/trekie_Icon.svg",
          alt: "Trekie Logo",
          title: "",
          url: "/"
        }}
        socialLinks={[
          { icon: <IconBrandTwitter />, href: "https://twitter.com/trekieapp", label: "Twitter" },
          { icon: <IconBrandInstagram />, href: "https://instagram.com/trekieapp", label: "Instagram" },
          { icon: <IconBrandTelegram />, href: "https://t.me/dorkodu", label: "Telegram" },
          { icon: <IconBrandYoutube />, href: "https://youtube.com/@dorkodu", label: "YouTube" },
          { icon: <IconBrandTwitter />, href: "https://bsky.com/user/dorkodu.com", label: "Bluesky" },
          { icon: <IconBrandYoutube />, href: "https://github.com/dorkodu", label: "GitHub" },
        ]}
      />
    </>
  );
}
