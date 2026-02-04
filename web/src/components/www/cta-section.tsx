import { IconArrowRight, IconMail } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@web/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-emerald-950/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-3 h-3 bg-emerald-400 rounded-full animate-float opacity-40" />
        <div className="absolute top-40 right-[15%] w-2 h-2 bg-cyan-400 rounded-full animate-float animation-delay-1000 opacity-30" />
        <div className="absolute bottom-20 left-[20%] w-2.5 h-2.5 bg-indigo-400 rounded-full animate-float animation-delay-2000 opacity-35" />
        <div className="absolute bottom-40 right-[10%] w-2 h-2 bg-emerald-300 rounded-full animate-float animation-delay-3000 opacity-40" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6">
          Ready to Build the{" "}
          <span className="bg-gradient-to-r from-emerald-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent animate-gradient-x">
            Future of Communities?
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
          Join thousands of builders creating regenerative communities with onchain gamification, DAOs, and AI agents.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            asChild
            size="lg"
            className="group h-14 px-10 text-lg font-bold rounded-2xl
              bg-gradient-to-r from-emerald-600 to-cyan-500
              hover:from-emerald-500 hover:to-cyan-400
              shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50
              transition-all duration-300 hover:scale-105"
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
              border-2 border-border/50 hover:border-emerald-500/50
              bg-background/50 backdrop-blur-sm
              hover:bg-emerald-500/5
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
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Launch in minutes</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Forever free tier</span>
          </div>
        </div>
      </div>
    </section>
  );
}
