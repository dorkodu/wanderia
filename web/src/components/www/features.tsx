import { IconArrowRight, IconBuildingBank, IconCoins, IconRocket } from '@tabler/icons-react';
import { Card, CardContent } from '@web/components/ui/card';
import { cn } from '@web/lib/utils';
import Emoji from '../misc/Emoji';
import { Button } from '../ui/button';


export function Features() {
  const glassBg = 'bg-white/35 dark:bg-black/35 backdrop-blur-2xs transition-all duration-500 hover:bg-white/45 dark:hover:bg-black/45';

  return (
    <section
      id="features"
      className="relative py-12 md:py-24 my-12 max-w-7xl rounded-3xl mx-auto overflow-hidden"
      style={{
        backgroundSize: "120% 120%",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundImage: 'url("https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        transition: 'background-size 0.8s ease-in-out'
      }}>
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80 transition-opacity duration-500" />

      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3">
            <Card className={cn("relative col-span-full flex overflow-hidden lg:col-span-2", glassBg)}>
              <CardContent className="relative size-fit">
                <div className="relative flex aspect-square size-14 bg-white rounded-xl dark:bg-black/40">
                  <Emoji className="m-auto" size={36} emoji="🌍" />
                </div>
                <h2 className="my-4 text-2xl font-bold">Your Community,<br />In One Place</h2>
                <p className='font-semibold text-muted-foreground'>Grow your project in a single dashboard.</p>
                <p>Bring together your project's members, token, DAO, contributions & rewards, social tools and AI agent.</p>
              </CardContent>
            </Card>
            <Card className={cn("relative col-span-full flex overflow-hidden lg:col-span-2", glassBg)}>
              <CardContent>
                <div className="relative flex aspect-square size-14 bg-white rounded-xl dark:bg-black/25">
                  <Emoji className="m-auto" size={36} emoji="🎯" />
                </div>
                <div className="relative z-10 mt-6 space-y-2">
                  <h2 className="group-hover:text-secondary-950 text-2xl font-bold transition dark:text-white">Purpose-Backed Tokens</h2>
                  <p className='font-semibold text-muted-foreground'>Launch utility tokens that do more than trade.</p>
                  <p className="text-foreground">Define your token’s purpose, reward real-world action, and configure sustainable tokenomics with our Builder’s Playbook. From reputation to treasury, your token becomes your movement’s engine.</p>
                </div>
              </CardContent>
            </Card>
            <Card className={cn("relative col-span-full flex overflow-hidden lg:col-span-2", glassBg)}>
              <CardContent>
                <div className="relative flex aspect-square size-14 bg-white rounded-xl dark:bg-black/25">
                  <Emoji className="m-auto" size={36} emoji="✅" />
                </div>
                <div className="relative z-10 mt-6 space-y-2">
                  <h2 className="text-2xl font-bold transition">Regenerative Commitments</h2>
                  <p className='font-semibold text-muted-foreground'>Build momentum by rewarding tasks, actions, and impact.</p>
                  <p className="text-foreground">Wanderia lets you reward for anything that matters, and track reputation for everyone who contributes.</p>
                </div>
              </CardContent>
            </Card>
            <Card className={cn("relative col-span-full overflow-hidden lg:col-span-3", glassBg)}>
              <CardContent className="">
                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-14 bg-white rounded-xl dark:bg-black/25">
                    <Emoji className="m-auto" size={40} emoji="💬" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="group-hover:text-secondary-950 text-xl font-bold transition">
                      Onchain AI Agents
                    </h2>
                    <p className='font-semibold text-muted-foreground'>Empower your community with its own AI agent.</p>
                    <p className="text-foreground">
                      Wanderia lets every project spawn a custom AI agent that knows your goals, members, and mission.
                      Learning from your culture, chats, and onchain data; your AI grows with your community.
                      Every contributor gets clarity on how to grow, help, and get rewarded; in sync with your mission.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className={cn("relative col-span-full overflow-hidden lg:col-span-3", glassBg)}>
              <CardContent className="">
                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-14 bg-white rounded-xl dark:bg-black/20">
                    <Emoji className="m-auto" size={40} emoji="🎮" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">Gamify Your Community</h2>
                    <p className="text-foreground">Turns real work into rewarding game loops. XP, karma, and token incentives unlock access as you contribute, aligning <b>fun</b> with <b>function</b>.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section >
  )
}

export function Punchline() {
  return (
    <section className="py-16 px-6 overflow-hidden max-w-5xl mx-auto">

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
          {/* Left Content */}
          <div className="space-y-8 flex-2/3">
            {/* Main Headline */}
            <div className="space-y-4">

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <IconRocket className="bg-gradient-to-tr from-indigo-700/70 to-green-300/50 text-indigo-800 dark:text-blue-300
                  p-1.5 size-12 rounded-lg" />
                  <span className="text-xl font-bold">Launch</span>
                </div>
                <p className="text-muted-foreground font-medium">Kickstart your community with its own token on the best all-in-one launchpad.</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <IconBuildingBank className="bg-gradient-to-tr from-indigo-700/70 to-green-300/50 text-indigo-800 dark:text-blue-300
                  p-2 size-12 rounded-lg" />
                  <span className="text-xl font-bold">Manage</span>
                </div>
                <p className="text-muted-foreground font-medium">Setup a DAO of your project for a community-driven governance.</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <IconCoins className="bg-gradient-to-tr from-indigo-700/70 to-green-300/50 text-indigo-800 dark:text-blue-300
                  p-2 size-12 rounded-lg" />
                  <span className="text-xl font-bold">Reward</span>
                </div>
                <p className="text-muted-foreground font-medium">Raise funds through trade fees, reward members with XP and tokens based on contributions. Onchain, gamified. </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 flex-1/3">
            <div className="space-y-2 leading-relaxed">
              <h2 className="text-2xl font-bold tracking-tight text-center">Community-driven Startups. <br /> Powered By Social Money.</h2>
              <p className="text-center text-lg">
                Embrace the democratization of value. Millions of specialized, culturally relevant tokens as social money, each governed by communities themselves.
              </p>
            </div>

            {/* CTA Button */}
            <Button size="xl" variant="secondary" className='
              w-[80%] mx-auto flex items-center justify-center gap-2
              bg-gradient-to-tr from-green-600/50 to-emerald-400/30 
              text-green-700 dark:text-green-300
            '>
              <span className='font-bold text-lg text-shadow-2xs'>LAUNCH IN A MINUTE</span>
              <IconArrowRight stroke={2.5} className='size-6' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
