import { IconArrowRight } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import { Button } from '@web/components/ui/button'


export function Hero() {
  return (
    <>
      <div className="overflow-hidden">
        <section>
          <div className="relative pt-20 md:pt-30">
            <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <img src="/images/trekie_Hero.svg" className='w-[100%] max-w-2xl mx-auto' />
                <div>
                  <h1 className="mt-8 max-w-5xl mx-auto text-balance font-extrabold font-stretch-75% text-3xl/9 md:text-4xl lg:text-4xl lg:mt-16 xl:text-[3.5rem]">
                    <span>
                      The Decentralized Superapp
                    </span><br />
                    <span className='text-2xl leading-0 md:text-4xl lg:text-4xl xl:text-5xl text-gray-400 font-medium'>
                      For Regenerative Communities
                    </span>
                  </h1>
                  <p className="mx-auto mt-4 max-w-4xl text-balance text-lg lg:text-xl">
                    Simplifying onchain gamification, social-fi and AI agents. Create a project, onboard your users, form a community, manage as DAO, release a utility token, contribute things to get rewarded, build a good karma for the next era of internet, one byte at a time.
                  </p>
                </div>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                  <Button
                    className="rounded-xl px-0 py-6
                    text-lg duration-200 
                    bg-gradient-to-tr from-green-600 to-emerald-500 
                    hover:to-emerald-400
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2">
                    <Link to="/" className="block px-8 py-3">
                      <span className="text-nowrap font-extrabold text-white text-shadow-xs">GET STARTED</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-0 py-6">
                    <a className="block px-8 py-3" href='#features'>
                      <span className="text-nowrap text-lg">See Features</span>
                      <IconArrowRight className="size-6" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>


            <div className="my-10 inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-5xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
              <img
                className="bg-background relative block dark:hidden rounded-2xl"
                src="/images/trekie-desktop-light.jpg"
                alt="app screen"
              />
              <img
                className="bg-background relative hidden rounded-2xl dark:block"
                src="/images/trekie-desktop-dark.jpg"
                alt="app screen"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}