import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_www/manifesto')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="flex flex-col min-h-screen">
    <main className="flex-grow">
      <section className="container mx-auto px-4 py-24 sm:py-32 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter">
          The World is Not a Zero-Sum Game.
        </h1>
        <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-slate-400">
          For too long, our digital and physical worlds have been built on extraction. Extracted data, extracted value, extracted hope. We were given platforms for connection that left us isolated, and tools for coordination that created chaos. It's time to build differently.
        </p>
        <div className="mt-8">
          <a href="#join" className="inline-flex items-center justify-center h-12 px-8 font-semibold text-black bg-white rounded-md shadow-lg transition-transform transform hover:scale-105">
            Begin the Journey
          </a>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">We are the Wanderers.</h2>
          <p className="max-w-2xl mx-auto mt-4 text-slate-400">
            We believe coordination is our superpower. We believe that value is created through contribution, not just speculation. We are building Wanderia, a new world for regenerative communities to gather, build, and thrive.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="border border-slate-800 bg-slate-900/50 rounded-xl p-6 flex flex-col items-start hover:border-slate-700 transition-all">
            <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-slate-300">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-2.472M6.176 9.922a9.351 9.351 0 015.644-2.472m0 0a9.349 9.349 0 015.644 2.472m-5.644-2.472a12.352 12.352 0 00-5.644 2.472M12 10.5h.008v.008H12v-.008z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a9.349 9.349 0 01-5.644-2.472 9.337 9.337 0 01-4.121-2.472A12.352 12.352 0 0012 18.75zm0 0a9.349 9.349 0 005.644-2.472 9.337 9.337 0 004.121-2.472A12.352 12.352 0 0112 18.75z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Sovereign Communities</h3>
            <p className="mt-2 text-slate-400">Form your tribe. Govern together with transparent, on-chain tools. This is more than a chat group; it's a digital polis where your voice matters and rules are code.</p>
          </div>

          <div className="border border-slate-800 bg-slate-900/50 rounded-xl p-6 flex flex-col items-start hover:border-slate-700 transition-all">
            <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-slate-300">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Living Economies</h3>
            <p className="mt-2 text-slate-400">Launch a community currency—not as a speculative chip, but as Social Money. A tool to fund projects, reward contribution, and create a vibrant, circular economy that serves its members.</p>
          </div>

          <div className="border border-slate-800 bg-slate-900/50 rounded-xl p-6 flex flex-col items-start hover:border-slate-700 transition-all">
            <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-slate-300">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.596.484-1.08 1.08-1.08h.36c.665 0 1.2.535 1.2 1.2v.36c0 .596-.484 1.08-1.08 1.08h-.36c-.665 0-1.2-.535-1.2-1.2v-.36zM10.5 12.337c0-.596.484-1.08 1.08-1.08h.36c.665 0 1.2.535 1.2 1.2v.36c0 .596-.484 1.08-1.08 1.08h-.36c-.665 0-1.2-.535-1.2-1.2v-.36zM6.75 18.587c0-.596.484-1.08 1.08-1.08h.36c.665 0 1.2.535 1.2 1.2v.36c0 .596-.484 1.08-1.08 1.08h-.36c-.665 0-1.2-.535-1.2-1.2v-.36z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Purposeful Action</h3>
            <p className="mt-2 text-slate-400">Turn intention into action. Create quests, complete tasks, and contribute to projects—both digital and in the real world. This is on-chain gamification with a soul, where play has a purpose.</p>
          </div>

          <div className="border border-slate-800 bg-slate-900/50 rounded-xl p-6 flex flex-col items-start hover:border-slate-700 transition-all">
            <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-slate-300">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.573L16.5 21.75l-.398-1.177a3.375 3.375 0 00-2.455-2.455L12.75 18l1.177-.398a3.375 3.375 0 002.455-2.455l.398-1.177.398 1.177a3.375 3.375 0 002.455 2.455l1.177.398-1.177.398a3.375 3.375 0 00-2.455 2.455z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Verifiable Karma</h3>
            <p className="mt-2 text-slate-400">Measure what matters. Your Karma is a living, on-chain record of your positive impact. It's a reputation you truly own. We enhance this with AI allies that help manage treasuries and verify contributions, augmenting our collective intelligence.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Built for a Regenerative Future</h2>
            <p className="mt-4 text-slate-400">
              This isn't just an idea; it's an architecture of purpose. Wanderia is a decentralized superapp built on tools chosen for their principles:
            </p>
            <ul className="mt-6 text-left inline-block space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <strong>Solana:</strong> For speed, scale, and an ecosystem that allows for complex, low-cost on-chain interactions.
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <strong>Open Protocols:</strong> For a foundation of free, censorship-resistant communication and interoperability.
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <strong>Artificial Intelligence:</strong> Not as a tool for control, but as DeFAI—decentralized agents that augment our ability to coordinate and thrive.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="join" className="container mx-auto px-4 py-24 sm:py-32 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The map is not the territory.</h2>
        <p className="max-w-2xl mx-auto mt-4 text-slate-400">
          The tools are ready. The need is clear. All that is missing is you. Join us in building a world where our digital actions create tangible, positive, and regenerative impact in the physical world.
        </p>
        <div className="mt-8">
          <a href="#" className="inline-flex items-center justify-center h-12 px-8 font-semibold text-black bg-white rounded-md shadow-lg transition-transform transform hover:scale-105">
            Join the Waitlist
          </a>
        </div>
      </section>
    </main>

    <footer className="border-t border-slate-800">
      <div className="container mx-auto px-4 py-6 text-center text-slate-500">
        <p>&copy; 2025 Wanderia. All rights reserved, freely for all.</p>
      </div>
    </footer>
  </div>
}
