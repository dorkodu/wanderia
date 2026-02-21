import {
  IconArrowRight,
  IconBrain,
  IconChevronDown,
  IconCoins,
  IconDeviceGamepad2,
  IconGavel,
  IconMenu2,
  IconRocket,
  IconUsers,
  IconX,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@web/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@web/components/ui/navigation-menu";
import { cn } from "@web/lib/utils";
import React, { useEffect, useState } from "react";
import ThemeToggle from "../theme-toggles";

const featureItems = [
  {
    icon: IconUsers,
    title: "Community Hub",
    description: "Bring members, tokens, and tools into one dashboard.",
    href: "/#features",
  },
  {
    icon: IconCoins,
    title: "Token Launchpad",
    description: "Launch utility tokens with sustainable tokenomics.",
    href: "/#features",
  },
  {
    icon: IconGavel,
    title: "DAO Governance",
    description: "Community-driven proposals, voting, and treasury.",
    href: "/#features",
  },
  {
    icon: IconBrain,
    title: "AI Agents",
    description: "Spawn custom AI that understands your community.",
    href: "/#features",
  },
  {
    icon: IconDeviceGamepad2,
    title: "Gamification",
    description: "XP, karma, and token rewards for real contributions.",
    href: "/#features",
  },
  {
    icon: IconRocket,
    title: "Commitments",
    description: "Track and reward tasks, actions, and impact.",
    href: "/#features",
  },
];

const aboutItems = [
  { title: "About Wanderia", description: "Our mission and story.", href: "/about" },
  { title: "Blog", description: "Latest updates and thinking.", href: "https://dorkodu.substack.com" },
  { title: "Open Source", description: "Explore our code on GitHub.", href: "https://github.com/dorkodu" },
];

const mobileLinks = [
  { href: "/#pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/docs", label: "Docs" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        "bg-white/60 dark:bg-background/60 backdrop-blur-xl",
        scrolled && "border-b border-border/30"
      )}
    >
      <nav className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/images/wanderia_Brand_White.svg"
              alt="Wanderia"
              className="h-12 hidden dark:block"
            />
            <img
              src="/images/wanderia_Brand.svg"
              alt="Wanderia"
              className="h-12 dark:hidden"
            />
          </Link>

          {/* Desktop nav */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {/* Features — mega menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-[15px] font-medium text-foreground/80 hover:text-foreground">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[540px] grid-cols-2 gap-1 p-2">
                    {/* Highlight card */}
                    <div className="col-span-2 mb-1 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-500 p-4 text-white">
                      <p className="text-sm font-bold">Wanderia Platform</p>
                      <p className="mt-1 text-xs text-white/80">
                        The all-in-one launchpad for regenerative onchain communities.
                      </p>
                    </div>
                    {featureItems.map((item) => (
                      <ListItem key={item.title} href={item.href} title={item.title} icon={item.icon}>
                        {item.description}
                      </ListItem>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Pricing — plain link */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/#pricing"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-[15px] font-medium text-foreground/80 hover:text-foreground"
                  )}
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About — dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-[15px] font-medium text-foreground/80 hover:text-foreground">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[280px] p-2">
                    {aboutItems.map((item) => (
                      <ListItem key={item.title} href={item.href} title={item.title}>
                        {item.description}
                      </ListItem>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Docs — plain link */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/docs"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-[15px] font-medium text-foreground/80 hover:text-foreground"
                  )}
                >
                  Docs
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              to="/login"
              className="px-3.5 py-2 text-[15px] font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
            >
              Sign in
            </Link>
            <Button
              asChild
              className="h-9 rounded-full px-5 text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-none transition-all"
            >
              <Link to="/create-account">
                Get started
                <IconArrowRight className="ml-1 size-3.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => {
              setMobileOpen(!mobileOpen);
              if (mobileOpen) setFeaturesOpen(false);
            }}
          >
            {mobileOpen ? (
              <IconX className="size-5" />
            ) : (
              <IconMenu2 className="size-5" />
            )}
          </Button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileOpen ? "max-h-[600px] pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-0.5 pt-2">
            {/* Features — collapsible */}
            <button
              type="button"
              className="flex items-center justify-between w-full px-3 py-2.5 text-[15px] font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
              onClick={() => setFeaturesOpen(!featuresOpen)}
            >
              Features
              <IconChevronDown
                className={cn(
                  "size-4 text-muted-foreground transition-transform duration-200",
                  featuresOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                featuresOpen ? "max-h-[400px]" : "max-h-0"
              )}
            >
              <div className="grid grid-cols-1 gap-0.5 pl-3 pr-1 py-1">
                {featureItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted/50 transition-colors"
                    onClick={() => {
                      setMobileOpen(false);
                      setFeaturesOpen(false);
                    }}
                  >
                    <div className="shrink-0 rounded-md bg-muted p-1.5">
                      <item.icon className="size-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Other links */}
            {mobileLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 text-[15px] font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* CTA */}
            <div className="flex items-center gap-2 px-3 pt-3 border-t border-border/40 mt-2">
              <Button
                asChild
                className="flex-1 h-10 rounded-full text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white"
              >
                <Link to="/create-account">Get started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-10 rounded-full px-5 text-sm font-semibold"
              >
                <Link to="/login">Sign in</Link>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

/** Reusable list item for NavigationMenuContent dropdowns. */
const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    icon?: React.ComponentType<{ className?: string }>;
  }
>(({ className, title, children, icon: Icon, ...props }, ref) => (
  <NavigationMenuLink asChild>
    <a
      ref={ref}
      className={cn(
        "flex select-none items-start gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors",
        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      )}
      {...props}
    >
      {Icon && (
        <div className="mt-0.5 shrink-0 rounded-md bg-muted p-1.5">
          <Icon className="size-4 text-muted-foreground" />
        </div>
      )}
      <div>
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="mt-1.5 line-clamp-2 text-xs leading-snug text-muted-foreground">
          {children}
        </p>
      </div>
    </a>
  </NavigationMenuLink>
));
ListItem.displayName = "ListItem";