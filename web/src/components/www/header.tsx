import { IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@web/components/ui/button";
import { cn } from "@web/lib/utils";
import { useEffect, useState } from "react";

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
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-white/95 dark:bg-background/95 backdrop-blur-md border-b border-border/40"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/images/wanderia_Brand_White.svg"
              alt="Wanderia"
              className="h-8 hidden dark:block"
            />
            <img
              src="/images/wanderia_Brand.svg"
              alt="Wanderia"
              className="h-8 dark:hidden"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-[15px] font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-3.5 py-2 text-[15px] font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
            >
              Sign in
            </Link>
            <Button
              asChild
              className="h-9 rounded-full px-5 text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-none transition-colors"
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
                className="px-3 py-2.5 text-[15px] font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 px-3 pt-3 border-t border-border/40 mt-2">
              <Button
                asChild
                className="flex-1 h-10 rounded-full text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white"
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
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}