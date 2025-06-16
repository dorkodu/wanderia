import { IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
import React from "react";
import { Image } from "../ui/image";

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

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <IconBrandInstagram className="size-5" />, href: "https://instagram.com/wanderia.xyz", label: "Instagram" },
  { icon: <IconBrandTwitter className="size-5" />, href: "https://twitter.com/wanderia_xyz", label: "Twitter" },
  { icon: <IconBrandLinkedin className="size-5" />, href: "https://linkedin.com/company/dorkodu", label: "The Company" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "/legal/terms" },
  { name: "Privacy Policy", href: "/legal/privacy" },
];

export const Footer = ({
  logo = {
    url: "https://wanderia.xyz",
    src: "https://wanderia.xyz/images/wanderia_Brand.svg",
    alt: "logo",
    title: "Wanderia",
  },
  sections = defaultSections,
  description = "The Decentralized Superapp for Regenerative Communities",
  socialLinks = defaultSocialLinks,
  copyright = "© 2024 Wanderia. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: FooterProps) => {
  return (
    <footer className="px-6">
      <section className="py-32">
        <div className="container mx-auto">
          <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
            <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
              {/* Logo */}
              <div className="flex items-center gap-2 lg:justify-start">
                <a href={logo.url}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-14"
                  />
                </a>
              </div>
              <p className="max-w-[70%] text-md text-muted-foreground">
                {description}
              </p>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                {socialLinks.map((social, idx) => (
                  <li key={idx} className="font-medium hover:text-primary">
                    <a href={social.href} aria-label={social.label}>
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 font-bold">{section.title}</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
            <p className="order-2 lg:order-1">{copyright}</p>
            <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
              {legalLinks.map((link, idx) => (
                <li key={idx} className="hover:text-primary">
                  <a href={link.href}> {link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

