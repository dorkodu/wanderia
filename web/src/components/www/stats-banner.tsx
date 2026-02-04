import { IconBolt, IconCode, IconUsers, IconWorld } from "@tabler/icons-react";

const stats = [
  {
    icon: IconUsers,
    value: "10K+",
    label: "Community Members",
  },
  {
    icon: IconWorld,
    value: "50+",
    label: "Active Projects",
  },
  {
    icon: IconCode,
    value: "100%",
    label: "Open Source",
  },
  {
    icon: IconBolt,
    value: "24/7",
    label: "AI Assistance",
  },
];

export function StatsBanner() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-950/30 via-cyan-950/30 to-indigo-950/30" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group text-center p-6 rounded-2xl transition-all duration-300 hover:bg-white/5"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-emerald-500 group-hover:from-emerald-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                <stat.icon className="w-7 h-7" />
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

        {/* Partner logos placeholder */}
        <div className="mt-12 pt-12 border-t border-white/10">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Built on the shoulders of giants
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {["Solana", "Vercel AI", "LangChain", "Drizzle", "ElysiaJS"].map((partner, i) => (
              <div
                key={i}
                className="px-4 py-2 text-sm font-mono font-medium text-muted-foreground"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
