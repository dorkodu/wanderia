import { IconAd, IconAdOff, IconArrowRight, IconBuildings, IconCheck, IconClock, IconInfinity, IconMail, IconMultiplier2x, IconPin, IconUserHeart, IconUsersGroup, IconWorld, IconX } from "@tabler/icons-react";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@web/components/ui/button";
import Emoji from "../misc/Emoji";

export function PremiumHero() {

  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center px-6">
      <div className="p-6 max-w-3xl lg:max-w-5xl rounded-xl bg-gradient-to-b from-indigo-800 to-cyan-400  text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-shadow-xs text-shadow-blue-800">
              Supercharge Your<br />Gamified Productivity.
            </h1>
            <p className="text-lg text-shadow-xs leading-tight">
              Reinventing your life has never been more fun and easy. Your first super-week is on us.
            </p>
            <Button
              className="w-full px-8! py-6 border-b-4
              text-lg font-bold
              rounded-xl cursor-pointer 
              shadow-lg hover:shadow-xl transition-all duration-300
              bg-white text-blue-600 hover:bg-blue-100 border-blue-300"
              onClick={() => navigate({ to: "/super" })}
            >
              TRY FOR FREE
              <IconArrowRight stroke={2.5} style={{ width: 24, height: 24 }} />
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-black/10"><IconAd className="size-8" /></div>
              <div>
                <h3 className="font-bold">Ad-free</h3>
                <p>No interruptions, full productivity.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-black/10"><IconMultiplier2x className="size-8" /></div>
              <div>
                <h3 className="font-bold">Doubled Gains</h3>
                <p>More coins, XP and items available.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-black/10"><IconUsersGroup className="size-8" /></div>
              <div>
                <h3 className="font-bold">Groups</h3>
                <p>
                  Share common goals & habits with friends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PricingSection() {
  const navigate = useNavigate()

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Emoji emoji="💸" size={40} />
          <h2 className="text-3xl font-extrabold tracking-tight">Pricing</h2>
        </div>
        <p className="text-lg">One app to gamify your life and 10x your productivity.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free Tier */}
        <div className="relative bg-transparent dark:bg-white/5 rounded-2xl border-2 border-slate-500/20 p-6 shadow-xs">
          <div className="absolute -top-10 left-4">
            <img src="/images/free.svg" className="h-20 w-20" />
          </div>

          <div className="mb-6 mt-6">
            <h3 className="text-2xl font-bold">Starter Pack</h3>
            <div className="text-lg text-muted-foreground mb-4">All basics for a new beginning!</div>

            <Button className="w-full py-6 rounded-xl text-lg cursor-pointer
              bg-gradient-to-tr from-green-600 to-emerald-500 hover:from-green-600 hover:to-emerald-400 
              text-white font-bold 
              border-b-4 border-green-700"
              onClick={() => navigate({ to: "/create-account" })}>
              GET STARTED
            </Button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-green-600/20 p-0.5 rounded-sm"><IconCheck stroke={2.25} className="w-5 h-5 text-green-600 flex-shrink-0" /></div>
              <span><b>3</b> Life Goals</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-600/20 p-0.5 rounded-sm"><IconCheck className="w-5 h-5 text-green-600 flex-shrink-0" /> </div>
              <span><b>8</b> Commitments</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-600/20 p-0.5 rounded-sm"><IconCheck className="w-5 h-5 text-green-600 flex-shrink-0" /> </div>
              <span>Live Stats</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-600/20 p-0.5 rounded-sm"><IconCheck className="w-5 h-5 text-green-600 flex-shrink-0" /></div>
              <span>Social Feed</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-slate-400/20 p-0.5 rounded-sm"><IconX className="w-5 h-5 text-slate-500 flex-shrink-0" /></div>
              <span className="text-muted-foreground">No Rewards</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-slate-400/20 p-0.5 rounded-sm"><IconX className="w-5 h-5 text-slate-500 flex-shrink-0" /></div>
              <span className="text-muted-foreground">No Integrations</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-slate-400/20 p-0.5 rounded-sm"><IconX className="w-5 h-5 text-slate-500 flex-shrink-0" /></div>
              <span className="text-muted-foreground">No Friend Competitions</span>
            </div>

          </div>
        </div>

        {/* Super Tier */}
        <div className="relative bg-gradient-to-br from-indigo-800 to-cyan-400 rounded-2xl p-6 shadow-lg text-white">
          <div className="absolute -top-6 left-2">
            <img src="/images/trekie_SUPER_Badge.svg" alt="" className="w-auto h-14" />
          </div>

          <div className="my-4">
            <div className="flex items-baseline gap-0 mb-1">
              <span className="text-4xl font-bold font-mono">$8</span>
              <span className="text-lg opacity-80 font-mono">/month</span>
            </div>
            <div className="text-lg mb-3 opacity-90">Say hello to your new <strong>supercharged life</strong>!</div>

            <Button
              className="w-full px-8! py-6 border-b-4
             text-lg font-bold
             rounded-xl cursor-pointer 
             shadow-lg hover:shadow-xl transition-all duration-300
             bg-white text-blue-600 hover:bg-blue-100 border-blue-300"
            >
              TRY FOR FREE
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="bg-black/15 p-1.5 rounded-md"><IconInfinity className="w-6 h-6 flex-shrink-0" /></div>
              <span className="text-shadow-sm">Increased Limits</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-black/15 p-1.5 rounded-md"><IconAdOff className="w-6 h-6 flex-shrink-0" /></div>
              <span className="text-shadow-sm">No Ads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-black/15 p-1 rounded-md"><IconMultiplier2x className="w-7 h-7 flex-shrink-0" /></div>
              <span className="text-shadow-sm">Doubled Gains</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-black/15 p-1.5 rounded-md"><IconWorld className="w-6 h-6 flex-shrink-0" /></div>
              <span className="text-shadow-sm">Public Pages</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-black/15 p-1.5 rounded-md"><IconPin className="w-6 h-6 flex-shrink-0" /></div>
              <span className="text-shadow-sm">Profile Highlights</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-black/15 p-1.5 rounded-md"><IconUsersGroup className="w-6 h-6 flex-shrink-0" /></div>
              <span className="text-shadow-sm">Communities</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl p-4 border-2 shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white p-2 rounded-lg">
              <IconUserHeart className="w-8 h-8" stroke={2.25} />
            </div>
            <h3 className="text-xl font-bold">Group Plan</h3>
          </div>
          <p className="mb-4">
            A better place for <b>friend groups, teams and families</b> to gamify and get productive together!
          </p>
          <div className="flex items-center gap-2 text-muted-foreground">
            <IconClock className="w-6 h-6" />
            <span className="text-lg">Coming Soon!</span>
          </div>
        </div>

        <div className="rounded-xl p-4 border-2 shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white p-2 rounded-lg">
              <IconBuildings className="w-8 h-8" stroke={2.25} />
            </div>
            <h3 className="text-xl font-bold">For Business</h3>
          </div>
          <p className="mb-4">
            Advanced controls & support to gamify your organization. <strong>Contact us, we can offer a solution that suit your needs.</strong>
          </p>
          <a href="mailto:hey@dorkodu.com">
            <div className="flex items-center gap-2 text-blue-600">
              <IconMail className="w-6 h-6" />
              <span className="font-medium">hey@dorkodu.com</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

