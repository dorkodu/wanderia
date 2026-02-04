import { IconArrowRight, IconPlayerPlay } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@web/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-emerald-950/20 dark:to-emerald-950/40" />

        {/* Animated blobs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Top fade for header blend */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[15%] w-2 h-2 bg-emerald-400 rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-[20%] w-3 h-3 bg-cyan-400 rounded-full animate-float animation-delay-1000 opacity-40" />
        <div className="absolute bottom-32 left-[25%] w-2 h-2 bg-indigo-400 rounded-full animate-float animation-delay-2000 opacity-50" />
        <div className="absolute top-1/2 right-[10%] w-1.5 h-1.5 bg-emerald-300 rounded-full animate-float animation-delay-3000 opacity-70" />
        <div className="absolute bottom-40 right-[30%] w-2.5 h-2.5 bg-cyan-300 rounded-full animate-float animation-delay-500 opacity-45" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              Now in Early Access
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
            <span className="block">The Decentralized</span>
            <span className="block mt-2 bg-gradient-to-r from-emerald-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent animate-gradient-x">
              Superapp For
            </span>
            <span className="block mt-2 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-500 bg-clip-text text-transparent animate-gradient-x animation-delay-500">
              Regenerative Communities
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4">
            Onchain gamification, DAOs, AI agents, and utility tokens—all in one place.
          </p>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground/80 leading-relaxed mb-10">
            Create a project, onboard your users, form a community, launch a token,
            reward contributions, and build good karma for the next era of the internet.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="group relative h-14 px-8 text-lg font-bold rounded-2xl
                bg-gradient-to-r from-emerald-600 to-cyan-500
                hover:from-emerald-500 hover:to-cyan-400
                shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40
                transition-all duration-300 hover:scale-105"
            >
              <Link to="/create-account">
                <span className="flex items-center gap-2">
                  Get Started Free
                  <IconArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg font-semibold rounded-2xl
                border-2 border-border/50 hover:border-emerald-500/50
                bg-background/50 backdrop-blur-sm
                hover:bg-emerald-500/5
                transition-all duration-300"
            >
              <a href="#features">
                <span className="flex items-center gap-2">
                  <IconPlayerPlay className="w-5 h-5" />
                  See How It Works
                </span>
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Open Source</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Solana Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Community First</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}