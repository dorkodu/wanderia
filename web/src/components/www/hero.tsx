import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@web/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-end overflow-hidden bg-white dark:bg-background">
      {/* Gradient swoosh image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/hero-swoosh.png"
          alt=""
          className="absolute right-0 top-0 h-full w-[65%] object-cover object-left select-none"
          draggable={false}
        />
        {/* Fade overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-background dark:via-background/80 w-[55%]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 md:px-10 pb-20 pt-32">
        {/* Stat counter */}
        <p className="mb-6 text-sm text-muted-foreground tracking-wide">
          Communities launched on Wanderia:{" "}
          <span className="text-indigo-600 dark:text-indigo-400 font-medium tabular-nums">
            127
          </span>
        </p>

        {/* Main headline */}
        <h1 className="max-w-[720px] text-[2.75rem] sm:text-[3.25rem] md:text-[3.75rem] lg:text-[4.25rem] leading-[1.1] tracking-[-0.02em] font-medium">
          <span className="text-foreground">The launchpad for </span>
          <span className="text-muted-foreground/60">
            regenerative onchain communities. Build your project, launch a
            token, reward contributors
          </span>
          <span className="text-foreground">—from </span>
          <span className="text-muted-foreground/60">
            your first member to your millionth.
          </span>
        </h1>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button
            asChild
            className="h-12 rounded-full px-6 text-[15px] font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-none transition-colors"
          >
            <Link to="/create-account">
              Get started
              <IconArrowRight className="ml-1.5 size-4" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-12 rounded-full px-6 text-[15px] font-semibold border-border/80 bg-white hover:bg-gray-50 text-foreground shadow-none dark:bg-background dark:hover:bg-muted"
          >
            <Link to="/login">
              <svg className="mr-2 size-[18px]" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign up with Google
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}