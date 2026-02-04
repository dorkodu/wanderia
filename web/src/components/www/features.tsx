import { IconArrowRight, IconBrain, IconCoins, IconRocket, IconSparkles, IconTarget, IconUsers } from "@tabler/icons-react";
import { Card, CardContent } from "@web/components/ui/card";
import { cn } from "@web/lib/utils";
import Emoji from "../misc/Emoji";
import { Button } from "../ui/button";

const features = [
  {
    title: "Community Hub",
    subtitle: "Your project, in one place",
    description: "Bring members, tokens, DAOs, contributions, rewards, social tools, and AI agents together in a single dashboard.",
    emoji: "🌍",
    size: "large",
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "Purpose-Backed Tokens",
    subtitle: "More than just trading",
    description: "Launch utility tokens that reward real-world action. Configure sustainable tokenomics with our Builder's Playbook.",
    emoji: "🎯",
    size: "medium",
    gradient: "from-cyan-500/20 to-indigo-500/20",
  },
  {
    title: "Regenerative Commitments",
    subtitle: "Reward what matters",
    description: "Build momentum by rewarding tasks, actions, and impact. Track reputation for every contributor.",
    emoji: "✅",
    size: "medium",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Onchain AI Agents",
    subtitle: "Your community's own AI",
    description: "Spawn custom AI agents that understand your goals, members, and mission. They grow with your community.",
    emoji: "💬",
    size: "large",
    gradient: "from-purple-500/20 to-emerald-500/20",
  },
  {
    title: "Gamify Everything",
    subtitle: "Fun meets function",
    description: "Turn real work into rewarding game loops. XP, karma, and tokens unlock access as you contribute.",
    emoji: "🎮",
    size: "medium",
    gradient: "from-emerald-500/20 to-yellow-500/20",
  },
  {
    title: "DAO Governance",
    subtitle: "Community-driven decisions",
    description: "Let your community vote on proposals, manage treasury, and shape the project's future together.",
    emoji: "🏛️",
    size: "medium",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
            <IconSparkles className="w-4 h-4 text-cyan-500" />
            <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
              Features
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              Build Communities
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Wanderia combines the best tools for community building, gamification, and tokenomics into one powerful platform.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <Card
              key={i}
              className={cn(
                "group relative overflow-hidden rounded-2xl border-0 transition-all duration-500",
                "bg-gradient-to-br",
                feature.gradient,
                "hover:scale-[1.02] hover:shadow-2xl",
                feature.size === "large" && "md:col-span-2 lg:col-span-1",
              )}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
              </div>

              {/* Glowing border */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-emerald-500/30 transition-colors duration-500" />

              <CardContent className="relative p-6 h-full">
                {/* Icon container */}
                <div className="relative flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-background/80 dark:bg-background/40 backdrop-blur-sm border border-white/10 group-hover:border-emerald-500/30 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-emerald-500/20">
                  <Emoji className="m-auto" size={32} emoji={feature.emoji} />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    {feature.subtitle}
                  </p>
                  <h3 className="text-xl font-bold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Punchline() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Steps */}
          <div className="space-y-6">
            {[
              {
                icon: IconRocket,
                title: "Launch",
                description: "Kickstart your community with its own token on our all-in-one launchpad.",
              },
              {
                icon: IconUsers,
                title: "Manage",
                description: "Set up a DAO for community-driven governance and transparent decisions.",
              },
              {
                icon: IconCoins,
                title: "Reward",
                description: "Raise funds, collect fees, and reward members based on contributions.",
              },
            ].map((step, i) => (
              <div key={i} className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white/5">
                <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-shadow duration-300">
                  <step.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: CTA */}
          <div className="text-center lg:text-left space-y-6 lg:pl-8">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Community-driven Startups.{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                Powered By Social Money.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Embrace the democratization of value. Millions of specialized, culturally relevant tokens as social money, each governed by communities themselves.
            </p>
            <Button
              size="lg"
              className="h-14 px-8 text-lg font-bold rounded-2xl
                bg-gradient-to-r from-emerald-600 to-cyan-500
                hover:from-emerald-500 hover:to-cyan-400
                shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40
                transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Launch in a Minute
                <IconArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SovereignAIAgents() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm">
            <IconBrain className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              AI Agents
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            Sovereign, Crypto-Native{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              AI Agents
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Forget generic chatbots. Spawn your own AI agent that understands your community, values, contributors, and token economy.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              title: "Mission-driven & Context-aware",
              description: "Trained on your community's public feed, docs, contributions, and goals. Your agent helps newcomers onboard and guides decision-making.",
            },
            {
              title: "Built on Open-source AI",
              description: "Open, decentralized, and deeply integrated with your project's token, tasks, and governance systems.",
            },
            {
              title: "Your AI, Your Rules",
              description: "Customize your agent's personality, knowledge scope, access levels, and behaviors. Train it on GitHub, Discord, Farcaster, and more.",
            },
            {
              title: "Token-native Intelligence",
              description: "Agents understand your token mechanics, karma systems, and bonding curves. They can explain, manage, and recommend treasury actions.",
            },
          ].map((feature, i) => (
            <Card key={i} className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-500 hover:border-indigo-500/30 hover:bg-white/10">
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Demo mockup */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Chat mockup */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>WanderBot is online</span>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex-shrink-0" />
                <div className="bg-white/10 rounded-2xl rounded-tl-sm p-3 text-sm">
                  Hey WanderBot, how can I earn XP today?
                </div>
              </div>
              <div className="flex gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex-shrink-0 flex items-center justify-center">
                  <IconBrain className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl rounded-tr-sm p-3 text-sm">
                  <p className="text-emerald-400 font-medium mb-2">Here are 3 open tasks with bounties:</p>
                  <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                    <li>Write a blog post about our bonding curve</li>
                    <li>Help onboard new Discord members</li>
                    <li>Design XP badges for next season</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Agent stats */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <IconBrain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold">WanderBot v1.0</h4>
                <p className="text-sm text-muted-foreground">Community AI Agent</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              {[
                { emoji: "🧠", label: "Trained on", value: "GitHub, Discord, Docs" },
                { emoji: "🪙", label: "Treasury-aware", value: "Yes" },
                { emoji: "🔒", label: "Permissions", value: "Contributor, Admin" },
                { emoji: "⚙️", label: "Deployed", value: "Onchain, Local, API" },
                { emoji: "🧩", label: "Modules", value: "Onboarding, Voting, Tasks" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
                  <span>{item.emoji}</span>
                  <span className="text-muted-foreground">{item.label}:</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Every community deserves an intelligence layer.
          </h3>
          <Button
            size="lg"
            className="h-14 px-8 text-lg font-bold rounded-2xl
              bg-gradient-to-r from-indigo-600 to-purple-500
              hover:from-indigo-500 hover:to-purple-400
              shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40
              transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <IconTarget className="w-5 h-5" />
              Create My Agent
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
