import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@web/components/ui/accordion";
import Emoji from "../misc/Emoji";

const items = [
  {
    category: "General",
    questions: [
      {
        question: "What is Wanderia?",
        answer:
          "Wanderia is a decentralized superapp built on Solana that lets anyone launch a community-backed utility token, coordinate tasks, reward real-world contributions, and grow regenerative economies through aligned incentives.",
      },
      {
        question: "Who is Wanderia for?",
        answer:
          "Wanderia is for anyone with a mission: creators, activists, developers, DAOs, open-source teams, educators, or local collectives—anyone who wants to launch a purpose-driven token economy around their community.",
      },
      {
        question: "Is Wanderia open-source and self-hostable?",
        answer:
          "Yes. Everything in Wanderia is designed to be open-source, modular, and self-hostable. You can run your own instance, extend the launchpad, or build plugins on top of the framework.",
      },
      {
        question: "Is Wanderia just another memecoin platform?",
        answer:
          "No. Wanderia takes inspiration from the social money concept behind memecoins, but focuses on utility, governance, and sustainability. Tokens launched here are meant to serve real communities with real goals.",
      },
    ],
  },
  {
    category: "Launch & Tokenomics",
    questions: [
      {
        question: "How do I launch a token on Wanderia?",
        answer:
          "Launching a token on Wanderia is simple and requires no code. You define your token's purpose, configure initial supply and distribution, choose a bonding curve, and launch your token through a guided interface backed by smart contracts.",
      },
      {
        question: "What is a utility token?",
        answer:
          "A utility token is a digital asset designed to unlock access, reward contributions, and fuel participation within a specific community or application—not to serve as speculative investment or store of value.",
      },
      {
        question:
          "What are tokenomics, and how are they configured?",
        answer:
          "Tokenomics refers to the rules and incentives governing your token's behavior. Wanderia gives you control over supply, allocation, vesting, bonding curve parameters, and more—all optimized for long-term alignment.",
      },
      {
        question:
          "What is a bonding curve and why does Wanderia use it?",
        answer:
          "A bonding curve is a mathematical formula that adjusts the price of a token based on its supply. It ensures fair pricing, always-available liquidity, and incentivizes early adopters without needing external market makers.",
      },
      {
        question: "What happens after my token is launched?",
        answer:
          "Your token enters the growth phase: contributors can earn it, governance can be activated, utility features can be added, and your treasury becomes the engine for community evolution.",
      },
    ],
  },
  {
    category: "Community Building & Use Cases",
    questions: [
      {
        question: "How do I reward contributors in my community?",
        answer:
          "Wanderia provides a task and contribution system that lets you create bounties and quests. Contributors who complete tasks earn your token, build reputation, and can gain governance rights or special roles.",
      },
      {
        question:
          "How does reputation and karma work in Wanderia?",
        answer:
          "Wanderia tracks positive contributions across communities. Users build 'karma' by completing tasks, voting, or helping others. High karma can unlock perks, roles, or eligibility for ecosystem-wide incentives.",
      },
      {
        question:
          "Can I customize governance models for my token?",
        answer:
          "Yes. After launch, you can activate DAO tools such as token voting, proposal creation, treasury control, and even quadratic voting models. Wanderia makes this accessible to all community builders.",
      },
      {
        question:
          "How do communities benefit from launching a token on Wanderia?",
        answer:
          "Tokens launched on Wanderia allow communities to create shared value, fund initiatives, build local reputation, and coordinate action. Revenue can be reinvested back into the community via treasury and governance features.",
      },
    ],
  },
  {
    category: "Identity, Wallets & Integration",
    questions: [
      {
        question:
          "Can I connect an existing wallet or account?",
        answer:
          "Yes. You can connect with any Solana-compatible wallet like Phantom, Backpack, or an embedded wallet. You can also import your Nostr key (nsec) to link your existing account.",
      },
      {
        question:
          "How does Wanderia ensure security and fairness?",
        answer:
          "Wanderia uses audited smart contracts, vesting schedules, wallet caps, anti-bot mechanisms, and LP lockups. Everything happens transparently on-chain and is designed to prevent extraction or rug pulls.",
      },
      {
        question:
          "Can I link my identity across Solana, Nostr, Farcaster, etc.?",
        answer:
          "Yes. Wanderia gives you a secure, portable root key that can be used to derive and verify identities across multiple protocols without compromising privacy or requiring multiple seed phrases.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-28 px-6">
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Emoji emoji="❓" size={40} />
            <h2 className="text-3xl font-extrabold tracking-tight">FAQs</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            All you might want to know about Wanderia.
          </p>
        </div>

        {items.map((category) => (
          <div key={category.category} className="space-y-3">
            <div className="inline-flex items-center px-3 py-1 rounded-lg bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {category.category}
              </span>
            </div>
            <Accordion
              type="single"
              collapsible
              className="-space-y-px"
            >
              {category.questions.map((item, index) => (
                <AccordionItem
                  value={index.toString()}
                  key={index}
                  className="bg-white/[0.02] has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative border border-white/5 px-4 py-1 outline-none first:rounded-t-xl last:rounded-b-xl last:border-b has-focus-visible:z-10 has-focus-visible:ring-[3px]"
                >
                  <AccordionTrigger className="justify-start gap-3 rounded-md py-2 text-md leading-6 outline-none hover:no-underline focus-visible:ring-0 [&>svg]:-order-1 cursor-pointer">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed ps-7 pb-3">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}
