import { cn } from "@web/lib/utils";
import type React from "react";
import ThemeToggle from "../theme-toggles";

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

export const Footer = ({
  logo,
  sections = [],
  description = "",
  socialLinks = [],
  copyright = "",
  legalLinks = [],
}: FooterProps) => {
  return (
    <footer className={cn("mx-auto px-6 transition-all duration-300 max-w-6xl")}>
      <section className="py-16">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start">
          {/* Left: Logo + description + socials */}
          <div className="flex w-full flex-col gap-5 lg:max-w-xs">
            {logo && (
              <a href={logo.url} className="inline-flex">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10"
                />
              </a>
            )}
            {description && (
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
            {socialLinks.length > 0 && (
              <ul className="flex items-center gap-3">
                {socialLinks.map((social, idx) => (
                  <li key={idx}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-200"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right: Link columns */}
          {sections.length > 0 && (
            <div className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-3 lg:max-w-lg">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground/60">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <a
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground/60 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <p>{copyright}</p>
            <ThemeToggle />
          </div>
          {legalLinks.length > 0 && (
            <ul className="flex flex-wrap gap-4">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-muted-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </footer>
  );
};
