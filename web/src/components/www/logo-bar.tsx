const logos = [
  "Solana",
  "Vercel AI",
  "LangChain",
  "Drizzle",
  "ElysiaJS",
  "React",
  "PostgreSQL",
];

export function LogoBar() {
  return (
    <section className="border-t border-border/40 bg-white dark:bg-background">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="flex items-center gap-10 overflow-x-auto py-5 scrollbar-none">
          {logos.map((name) => (
            <span
              key={name}
              className="shrink-0 text-sm font-semibold text-muted-foreground/50 tracking-wide select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
