import { IconArrowRight, IconPlayerPlay } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@web/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0A0A0F]" />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-[120px] animate-blob animation-delay-4000" />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[12%] w-1.5 h-1.5 bg-emerald-400 rounded-full animate-float opacity-50" />
        <div className="absolute top-[30%] right-[18%] w-2 h-2 bg-cyan-400 rounded-full animate-float animation-delay-1000 opacity-30" />
        <div className="absolute bottom-[25%] left-[22%] w-1.5 h-1.5 bg-violet-400 rounded-full animate-float animation-delay-2000 opacity-40" />
        <div className="absolute top-[55%] right-[8%] w-1 h-1 bg-emerald-300 rounded-full animate-float animation-delay-3000 opacity-60" />
        <div className="absolute bottom-[30%] right-[28%] w-2 h-2 bg-cyan-300 rounded-full animate-float animation-delay-500 opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 lg:py-40">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-emerald-400">
              Now in Early Access
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8">
            <span className="block text-foreground">Build Onchain.</span>
            <span className="block mt-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent animate-gradient-x">
              Together.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12">
            The launchpad & OS for onchain businesses.
            Launch tokens, build DAOs, deploy AI agents, and grow
            regenerative communities — all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="group h-14 px-10 text-lg font-bold rounded-2xl
                bg-gradient-to-r from-emerald-600 to-cyan-500
                hover:from-emerald-500 hover:to-cyan-400
                shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40
                transition-all duration-300 hover:scale-[1.02]"
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
                border-2 border-white/10 hover:border-emerald-500/30
                bg-white/5 backdrop-blur-sm
                hover:bg-white/10
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
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {["Open Source", "Solana Powered", "Community First"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/40 rounded-full animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}