import { IconArrowRight, IconPlus } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@web/components/ui/button";
import { useState } from "react";

const caseStudies = [
  {
    emoji: "🌿",
    name: "GreenDAO",
    headline: "GreenDAO builds a regenerative farming economy on Wanderia.",
  },
  {
    emoji: "🎮",
    name: "PlayGuild",
    headline:
      "PlayGuild gamifies open-source contribution tracking with XP & tokens.",
  },
  {
    emoji: "🏘️",
    name: "UrbanCommons",
    headline:
      "UrbanCommons coordinates 2,000+ neighborhood volunteers with onchain rewards.",
  },
  {
    emoji: "🧠",
    name: "NeuralCollective",
    headline:
      "NeuralCollective uses AI agents to onboard & govern a decentralized research lab.",
  },
];

export function SocialProof() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-white dark:bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Section headline */}
        <h2 className="max-w-[720px] text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[-0.02em] font-medium mb-14">
          <span className="text-foreground font-semibold">
            Building communities of all sizes.{" "}
          </span>
          <span className="text-muted-foreground/60">
            Launch and grow your project on a reliable platform that adapts to
            your needs.
          </span>
        </h2>

        {/* Enterprise pitch */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold leading-snug text-foreground mb-5">
              Transform your community with
              <br />
              regenerative infrastructure
            </h3>
            <Button
              asChild
              className="h-12 rounded-full px-6 text-[15px] font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-none transition-colors"
            >
              <Link to="/create-account">
                Wanderia for projects
                <IconArrowRight className="ml-1.5 size-4" />
              </Link>
            </Button>
          </div>
          <div>
            <p className="text-muted-foreground/80 leading-relaxed">
              Communities on Wanderia use onchain gamification, AI agents, and
              purpose-backed tokens to grow their
              projects—from launching internationally to reimagining how
              contributors get rewarded.
            </p>
          </div>
        </div>

        {/* Case studies accordion */}
        <div className="divide-y divide-border/50">
          {caseStudies.map((study, i) => (
            <button
              key={i}
              className="flex w-full items-center gap-4 py-5 text-left group"
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            >
              {/* Emoji avatar */}
              <span className="flex shrink-0 items-center justify-center size-10 rounded-xl bg-muted/50 text-xl">
                {study.emoji}
              </span>

              {/* Headline */}
              <span className="flex-1 text-[15px] sm:text-base font-medium text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {study.headline}
              </span>

              {/* Action */}
              {activeIndex === i ? (
                <span className="shrink-0 text-sm font-medium text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                  Read the story
                  <IconArrowRight className="size-3.5" />
                </span>
              ) : (
                <span className="shrink-0 p-1 text-muted-foreground">
                  <IconPlus className="size-4" />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
