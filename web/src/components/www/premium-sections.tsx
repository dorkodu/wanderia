import {
  IconAdOff,
  IconArrowRight,
  IconBuildings,
  IconCheck,
  IconClock,
  IconInfinity,
  IconMail,
  IconMultiplier2x,
  IconPin,
  IconUserHeart,
  IconUsersGroup,
  IconWorld,
  IconX,
} from "@tabler/icons-react";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@web/components/ui/button";
import Emoji from "../misc/Emoji";

export function PremiumHero() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="mx-auto max-w-4xl">
        <div className="relative rounded-3xl overflow-hidden p-8 md:p-12 bg-gradient-to-br from-emerald-600 via-cyan-600 to-violet-600">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="space-y-6 text-white">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                Supercharge Your{" "}
                <span className="text-emerald-200">Community</span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed">
                Unlock premium features to scale your regenerative community.
                Your first week is on us.
              </p>
              <Button
                className="w-full sm:w-auto h-14 px-8 text-lg font-bold rounded-2xl
                  bg-white text-emerald-700 hover:bg-emerald-50
                  shadow-lg shadow-black/20 transition-all duration-300 hover:scale-[1.02]"
                onClick={() => navigate({ to: "/super" })}
              >
                <span className="flex items-center gap-2">
                  Try Free for 7 Days
                  <IconArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {[
                {
                  icon: IconAdOff,
                  title: "Ad-free Experience",
                  description: "No interruptions, full productivity.",
                },
                {
                  icon: IconMultiplier2x,
                  title: "Doubled Gains",
                  description: "More XP, tokens, and rewards.",
                },
                {
                  icon: IconUsersGroup,
                  title: "Unlimited Groups",
                  description: "Create unlimited community spaces.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/10 backdrop-blur-sm"
                >
                  <div className="p-2 rounded-lg bg-white/20">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{feature.title}</h4>
                    <p className="text-sm text-white/75">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Emoji emoji="💸" size={40} />
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Simple Pricing
            </h2>
          </div>
          <p className="max-w-xl mx-auto text-lg text-muted-foreground">
            One platform to gamify your community and 10x your growth.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* Starter */}
          <div className="relative rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:border-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/5">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-muted-foreground">
                All the basics for a new beginning
              </p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-black">Free</span>
              <span className="text-muted-foreground ml-2">forever</span>
            </div>

            <Button
              className="w-full h-12 rounded-xl text-lg font-bold
                bg-gradient-to-r from-emerald-600 to-cyan-500
                hover:from-emerald-500 hover:to-cyan-400
                transition-all duration-300"
              onClick={() => navigate({ to: "/create-account" })}
            >
              Get Started Free
            </Button>

            <div className="mt-8 space-y-3">
              {[
                { included: true, text: "3 Life Goals" },
                { included: true, text: "8 Commitments" },
                { included: true, text: "Live Stats" },
                { included: true, text: "Social Feed" },
                { included: false, text: "No Rewards" },
                { included: false, text: "No Integrations" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  {item.included ? (
                    <div className="p-0.5 rounded bg-emerald-500/20">
                      <IconCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                  ) : (
                    <div className="p-0.5 rounded bg-white/5">
                      <IconX className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}
                  <span
                    className={item.included ? "" : "text-muted-foreground"}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pro */}
          <div className="relative rounded-3xl bg-gradient-to-br from-emerald-600 via-cyan-600 to-violet-600 p-8 text-white shadow-xl shadow-emerald-500/10">
            {/* Popular badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-emerald-700 text-sm font-bold shadow-lg">
              Most Popular
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-white/75">Supercharge your community</p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-black">$8</span>
              <span className="text-white/75 ml-1">/month</span>
            </div>

            <Button className="w-full h-12 rounded-xl text-lg font-bold bg-white text-emerald-700 hover:bg-emerald-50 transition-all duration-300">
              Try Free for 7 Days
            </Button>

            <div className="mt-8 space-y-3">
              {[
                { icon: IconInfinity, text: "Unlimited Everything" },
                { icon: IconAdOff, text: "Ad-free Experience" },
                { icon: IconMultiplier2x, text: "Doubled Gains" },
                { icon: IconWorld, text: "Public Pages" },
                { icon: IconPin, text: "Profile Highlights" },
                { icon: IconUsersGroup, text: "Unlimited Groups" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-1 rounded bg-white/20">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional options */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-emerald-500/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
                <IconUserHeart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Group Plan</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Perfect for friend groups, teams, and families to grow together.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <IconClock className="w-5 h-5" />
              <span>Coming Soon</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-violet-500/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 text-white">
                <IconBuildings className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Enterprise</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Custom solutions for organizations with advanced needs.
            </p>
            <a
              href="mailto:hey@dorkodu.com"
              className="flex items-center gap-2 text-emerald-400 font-medium hover:underline"
            >
              <IconMail className="w-5 h-5" />
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
