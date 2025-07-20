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
                <div>
                  <h1 className="mt-6 max-w-5xl mx-auto text-balance font-extrabold font-stretch-75%
                  text-2xl/9 md:text-3xl lg:text-2xl lg:mt-16 xl:text-[3rem]">
                    The Decentralized Superapp<br />
                    <span className='bg-gradient-to-r from-indigo-500 via-green-500 to-cyan-400 inline-block text-transparent bg-clip-text'>
                      For Regenerative Communities
                    </span>
                  </h1>
                  <h2 className="max-w-5xl mx-auto lg:mt-4 
                  text-balance font-bold font-stretch-75%
                  text-lg/9 md:text-xl lg:text-2xl xl:text-3xl 
                  text-slate-500/80 dark:text-slate-400/80 
                  ">
                    With onchain gamification, DAOs, AI agents and utility tokens.
                  </h2>
                  <p className="mx-auto mt-4 max-w-5xl text-balance text-lg lg:text-xl">
                    Create a project, onboard your users, form a community, manage as DAO, release a utility token, contribute things to get rewarded, build a good karma for the next era of internet, one byte at a time.
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
          </div>
        </section>
      </div>
    </>
  )
}