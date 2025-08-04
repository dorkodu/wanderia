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
                  <IconRocket className="bg-gradient-to-tr from-purple-900 via-blue-600  to-green-500 text-white 
                  p-1.5 size-12 rounded-lg" />
                  <span className="text-xl font-bold">Launch</span>
                </div>
                <p className="text-muted-foreground font-medium">Kickstart your community with its own token on the best all-in-one launchpad.</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <IconBuildingBank className="bg-gradient-to-tr from-purple-900 via-blue-600  to-green-500 text-white 
                  p-2 size-12 rounded-lg" />
                  <span className="text-xl font-bold">Manage</span>
                </div>
                <p className="text-muted-foreground font-medium">Setup a DAO of your project for a community-driven governance.</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <IconCoins className="bg-gradient-to-tr from-purple-900 via-blue-600  to-green-500 text-white
                  p-2 size-12 rounded-lg" />
                  <span className="text-xl font-bold">Reward</span>
                </div>
                <p className="text-muted-foreground font-medium">Raise funds, collect fees, reward members with XP and tokens based on contributions. </p>
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

export function SovereignAIAgents() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">


        {/* Headline + Subheadline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Sovereign, Crypto-Native AI Agents
            </h2>
          </div>

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h3 className="text-lg md:text-xl font-semibold text-muted-foreground">
              Your community’s own AI. <br /> Natively onchain and mission-aligned.
            </h3>
            <p className="text-md text-slate-300">
              Forget generic chatbots. Spawn your own AI agent that understands your community, values, contributors, and token economy.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Mission-driven & Context-aware",
              desc: "Trained on your community’s public feed, docs, contributions, and goals. Your agent helps newcomers onboard, keeps builders focused, and guides decision-making.",
            },
            {
              title: "Built on open-source AI infrastructure",
              desc: "Open, decentralized, and deeply integrated with your project’s token, tasks, and governance.",
            },
            {
              title: "Your AI, your rules",
              desc: "Customize your agent’s personality, knowledge scope, access levels, and behaviors. Train it on your GitHub, Discord, Farcaster, and more.",
            },
            {
              title: "Token-native intelligence",
              desc: "Agents understand your token mechanics, karma systems, and bonding curves. They can explain it, manage it, and even recommend treasury actions.",
            },
          ].map((feature, i) => (
            <Card key={i} className="py-4 px-6 border rounded-2xl bg-slate-800/40 backdrop-blur gap-2">
              <h4 className="text-lg font-semibold">{feature.title}</h4>
              <p className="">{feature.desc}</p>
            </Card>
          ))}
        </div>

        {/* Visual Mockup Area */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Chat Mockup */}
          <div className="bg-slate-800 rounded-2xl p-6 space-y-4 shadow-lg">
            <div className="text-slate-400 text-sm">User:</div>
            <div className="text-white font-semibold">Hey WanderBot, how can I earn XP today?</div>
            <div className="text-slate-400 text-sm">WanderBot:</div>
            <div className="text-green-400">Here are 3 open tasks tied to bounties:</div>
            <ul className="list-disc pl-5 text-slate-300">
              <li>Write a blog post explaining our bonding curve</li>
              <li>Help onboard new Discord members</li>
              <li>Design XP badges for next season</li>
            </ul>
          </div>

          {/* Right: Agent Stats / UI */}
          <div className="space-y-4 bg-slate-800 rounded-2xl p-6 shadow-lg">
            <h4 className="text-xl font-semibold text-white">Agent: WanderBot v1</h4>
            <ul className="space-y-2 text-slate-300">
              <li>🧠 Trained on: GitHub, Discord, Tokenomics docs</li>
              <li>🪙 Treasury-aware: Yes</li>
              <li>🔒 Permissions: Contributor, Admin</li>
              <li>⚙️ Deployed: Onchain, Local, API</li>
              <li>🧩 Plugin modules: Onboarding, Voting, Tasks</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-semibold text-white">
            Every community deserves an intelligence layer. Launch yours with one click.
          </h3>
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl transition">
            ⚙️ Create My Agent
          </button>
        </div>


      </div>
    </section>
  );
}

