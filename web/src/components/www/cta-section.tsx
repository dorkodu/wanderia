import { IconArrowRight, IconMail } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@web/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/15 to-emerald-950/25" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[8%] w-2 h-2 bg-emerald-400 rounded-full animate-float opacity-30" />
        <div className="absolute top-[35%] right-[12%] w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float animation-delay-1000 opacity-20" />
        <div className="absolute bottom-[15%] left-[18%] w-2 h-2 bg-violet-400 rounded-full animate-float animation-delay-2000 opacity-25" />
        <div className="absolute bottom-[30%] right-[8%] w-1.5 h-1.5 bg-emerald-300 rounded-full animate-float animation-delay-3000 opacity-30" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6">
          Ready to Build the{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent animate-gradient-x">
            Future of Communities?
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
          Join thousands of builders creating regenerative communities with
          onchain gamification, DAOs, and AI agents.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
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
                Start Building Now
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
            <a href="mailto:hey@dorkodu.com">
              <span className="flex items-center gap-2">
                <IconMail className="w-5 h-5" />
                Contact Us
              </span>
            </a>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          {["No credit card required", "Launch in minutes", "Forever free tier"].map(
            (item) => (
              <div
                key={item}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{item}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
