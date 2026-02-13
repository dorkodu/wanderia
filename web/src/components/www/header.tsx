import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@web/components/ui/button";
import { cn } from "@web/lib/utils";
import { useEffect, useState } from "react";
import ThemeToggle from "../theme-toggles";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/docs", label: "Docs" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/images/wanderia_Brand_White.svg"
              alt="Wanderia"
              className="h-10 hidden dark:block"
            />
            <img
              src="/images/wanderia_Brand.svg"
              alt="Wanderia"
              className="h-10 dark:hidden"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              className="rounded-xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-500 hover:from-emerald-500 hover:to-cyan-400 shadow-md shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/30"
            >
              <Link to="/create-account">Get Started</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
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
            mobileOpen ? "max-h-80 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 px-3 pt-2 border-t border-border/50 mt-2">
              <Button
                asChild
                size="sm"
                className="flex-1 rounded-xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-500"
              >
                <Link to="/create-account">Get Started</Link>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}