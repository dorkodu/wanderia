
import { createFileRoute } from '@tanstack/react-router';
import Emoji from "@web/components/misc/Emoji";
import { Container, Flex, Group, Stack } from "@web/components/ui/layout";
import { Text, Title } from "@web/components/ui/typography";

export const Route = createFileRoute('/_www/about')({
  component: About,
})

function About() {
  return (
    <Flex direction="column" className="m-4">
      <Container size={760}>
        <Group wrap="nowrap" className="mb-4" gap={12}>
          <Emoji emoji="📄" size={36} />
          <Stack gap={0}>
            <Title order={1} fw={750} lh={1}>
              About
            </Title>
            {/* <Text span inherit variant="gradient" gradient={{ from: "#17CC38", to: "#6BD731", deg: 60 }}> Gamification</Text> */}
            <Title order={2} color="dimmed" fw={600} size={18}>
              Buildilng gamified tools for thought we are building at Dorkodu.
            </Title>
          </Stack>
        </Group>

        <Text>
          Trekie is a gamified productivity companion app where people can set
          life goals, track habits and share their journey with friends. Think
          of this as your life’s dashboard, with social features. Connect
          actions and events to your goals. All progress tracked with XPs, your
          daily gains as your momentum, in-game rewards as coins, and daily
          streaks. Your AI guide creates you a roadmap to help you realize your
          dream life. Duolingo for productivity. Life gamification, simplified
          :) With the feedback, we will build a B2B solution for teams, schools,
          companies or anyone with multiplayer needs. Enterprise plan will be
          added. The app is built with our SDK and API. Both will be available
          for developers to create other gamified apps and grow together as an
          open ecosystem, by us providing standard building blocks and our
          network of users. Also we ourselves will make a few gamified mini apps
          to experiment in niches, and believe this will help promote the
          ecosystem and create extra source of income.
        </Text>

        <Text>
          Progress How far along are you? Pre-launch stage. Roughly 85% progress
          towards and 2-3 weeks away from a public MVP launch. We built the app,
          SDK, and a complimentary mini-app for testing our ecosystem
          hypothesis. After gaining some traction and feedback, we’ll build the
          community edition as a B2B offer. That would take around 6-8 weeks to
          ship.
        </Text>

        <Text>
          How long have each of you been working on this? How much of that has
          been full-time? Please explain. Spanning 6 months, only the last few
          weeks were full-time. We built the first prototype in 2 weeks back in
          February, then improved on 3 iterations, and now the final MVP is
          almost ready. The idea and designs have been around for 2 years, but
          we decided to focus full-time just last month.
        </Text>

        <Text>
          What tech stack are you using, or planning to use, to build this
          product? Principally full-stack web, one codebase, cross-platform.
          React + TypeScript for the app. Vite + Bun for JS dev tools and
          monorepo. Postgres + KeyDB for database and cache. Capacitor for
          enabling mobile builds. VPS from Hetzner for hosting the entire
          backend monolith. We avoid platform/SaaS-oriented frameworks and
          tooling to avoid platform lock-in, save costs, and stay close to
          standards.
        </Text>

        <Text>
          Why did you pick this idea to work on? Do you have domain expertise in
          this area? How do you know people need what you're making? I needed a
          life dashboard with an AI productivity companion to set goals, connect
          actions to them and be able to track & measure the progress, in a fun
          way, then share my journey with friends. We spent nearly 2 years
          researching and experimenting on gamification. Also I am pursuing a
          Bachelor of Education with interests in cognitive science, psychology
          and game design. Most people are satisfied with Duolingo and wish it
          was fun to do other chores. I hear many folks complain about losing
          the track of their life, failing to set goals, lacking a routine:
          thousands tweet their new year's life goals, looking for
          accountability buddies, or complaining from complexity of productivity
          apps. So with latest trends, even if AI agents replace 90% of our
          daily digital activity, there is a need for a glue layer where "you"
          take control.
        </Text>

        <Text>
          Who are your competitors? What do you understand about your business
          that they don't? Not much direct competition. Duolingo is the most
          famous example, but it's only for language learning. Habitica, LifeUp
          etc. are few apps that tried gamified habits. There are many custom
          Notion templates but your life can't fit in a spreadsheet. Apps are
          indie, but don't have dedicated teams, they ignore user feedback, have
          high churn, lack an active community. UIs are either too game-like and
          distracting or too simple to the point of boring you, not
          beginner-friendly and unclear. They all ignore social features,
          failing to hook users and choke growth. Our difference is creating a
          connected ecosystem. 1) An app for regular users 2) SDK & API for
          developers 3) custom solutions for community/enterprise. You could use
          different tools at school, work and self-time yet all work together
          thanks to our composable building blocks and open network.
        </Text>

        <Text></Text>
      </Container>
    </Flex>
  );
}