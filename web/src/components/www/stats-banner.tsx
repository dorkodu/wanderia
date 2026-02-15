const stats = [
  { value: "50+", label: "communities launched\non Wanderia" },
  { value: "10K+", label: "members onboarded\nacross all projects" },
  { value: "99.9%", label: "historical uptime\nfor Wanderia services" },
  { value: "100%", label: "open-source and\ncommunity-driven" },
];

export function StatsBanner() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-blue-50/50 dark:from-muted/30 dark:to-muted/10 py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-foreground mb-16">
          The backbone of
          <br />
          regenerative communities
        </h2>

        {/* Stats row with top gradient border */}
        <div className="relative">
          {/* Gradient top border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center py-10 px-4"
              >
                {/* Vertical separator */}
                {i > 0 && (
                  <div className="absolute left-0 top-6 bottom-6 w-px bg-border/50 hidden md:block" />
                )}
                <span className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-3">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground leading-snug whitespace-pre-line">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative starburst */}
        <div className="relative mt-12 flex justify-center">
          <div className="w-full max-w-[600px] h-[250px] relative">
            {/* Radial lines effect using CSS */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  repeating-conic-gradient(
                    from 0deg,
                    transparent 0deg,
                    rgba(99, 102, 241, 0.15) 0.5deg,
                    transparent 1deg
                  )
                `,
                maskImage:
                  "radial-gradient(ellipse at 50% 100%, black 0%, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at 50% 100%, black 0%, transparent 70%)",
              }}
            />
            {/* Gold overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  repeating-conic-gradient(
                    from 45deg,
                    transparent 0deg,
                    rgba(234, 179, 8, 0.12) 0.3deg,
                    transparent 0.6deg
                  )
                `,
                maskImage:
                  "radial-gradient(ellipse at 50% 100%, black 0%, transparent 60%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at 50% 100%, black 0%, transparent 60%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
