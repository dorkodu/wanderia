import {
  IconArrowUpRight,
  IconBrain,
  IconCoins,
  IconScale,
  IconTrophy,
  IconUsers,
} from "@tabler/icons-react";
import type React from "react";

interface SolutionCard {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

const topRow: SolutionCard[] = [
  {
    title: "Build and grow your\ncommunity—online and onchain",
    icon: IconUsers,
    gradient: "from-indigo-200 via-purple-100 to-pink-100",
  },
  {
    title: "Enable any token model",
    icon: IconCoins,
    gradient: "from-amber-100 via-orange-100 to-purple-200",
  },
];

const bottomRow: SolutionCard[] = [
  {
    title: "Gamify engagement\nwith quests and XP",
    icon: IconTrophy,
    gradient: "from-pink-100 via-rose-50 to-indigo-100",
  },
  {
    title: "Spawn sovereign\nAI agents",
    icon: IconBrain,
    gradient: "from-violet-100 via-indigo-50 to-cyan-100",
  },
  {
    title: "Govern with\nonchain DAOs",
    icon: IconScale,
    gradient: "from-cyan-100 via-emerald-50 to-indigo-100",
  },
];

function ProductCard({ card }: { card: SolutionCard }) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-border/50 bg-white dark:bg-card overflow-hidden transition-shadow hover:shadow-lg">
      {/* Header */}
      <div className="flex items-start justify-between p-6 pb-0">
        <h3 className="text-xl font-semibold leading-snug whitespace-pre-line text-foreground">
          {card.title}
        </h3>
        <button className="shrink-0 ml-4 p-1.5 rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-colors">
          <IconArrowUpRight className="size-4" />
        </button>
      </div>

      {/* Visual area */}
      <div className="mt-6 flex-1 min-h-[220px] relative">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${card.gradient} dark:opacity-30`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <card.icon className="size-20 text-emerald-600/20 dark:text-emerald-400/20" />
        </div>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="bg-white dark:bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Section headline — Stripe style: bold black + lighter gray */}
        <h2 className="max-w-[820px] text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[-0.02em] font-medium mb-14">
          <span className="text-foreground font-semibold">
            Flexible tools for every community model.{" "}
          </span>
          <span className="text-muted-foreground/60">
            Build and scale regenerative communities with a powerful set of
            social, financial, and governance tools—designed to work individually
            or together.
          </span>
        </h2>

        {/* Top row: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {topRow.map((card) => (
            <ProductCard key={card.title} card={card} />
          ))}
        </div>

        {/* Bottom row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {bottomRow.map((card) => (
            <ProductCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
