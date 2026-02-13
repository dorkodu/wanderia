import { IconBolt, IconCode, IconUsers, IconWorld } from "@tabler/icons-react";

const stats = [
  { icon: IconUsers, value: "10K+", label: "Community Members" },
  { icon: IconWorld, value: "50+", label: "Active Projects" },
  { icon: IconCode, value: "100%", label: "Open Source" },
  { icon: IconBolt, value: "24/7", label: "AI Assistance" },
];

const techPartners = ["Solana", "Vercel AI", "LangChain", "Drizzle", "ElysiaJS"];

export function StatsBanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-950/20 via-cyan-950/20 to-violet-950/20" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group text-center p-6 rounded-2xl transition-all duration-300 hover:bg-white/5"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-all duration-300">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-black tracking-tight mb-1 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech partners */}
        <div className="mt-16 pt-10 border-t border-white/5">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground/60 mb-6">
            Built on the shoulders of giants
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {techPartners.map((partner, i) => (
              <span
                key={i}
                className="text-sm font-mono font-medium text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
