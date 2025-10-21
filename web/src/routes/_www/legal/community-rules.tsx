import { createFileRoute } from "@tanstack/react-router";
import Emoji from "@web/components/misc/Emoji";
import { Container, Group, Stack } from "@web/components/ui/layout";
import { Title } from "@web/components/ui/typography";

export const Route = createFileRoute("/_www/legal/community-rules")({
  component: CommunityRules,
});

function CommunityRules() {
  return (
    <Container size={760}>
      <Group wrap="nowrap" className="max-w-[440px]">
        <Emoji emoji="👥" size={40} />
        <Stack gap={0}>
          <Title order={1} className="font-extrabold leading-none">
            Community Rules
          </Title>
          {/* <Text span inherit variant="gradient" gradient={{ from: "#17CC38", to: "#6BD731", deg: 60 }}> Gamification</Text> */}
          <Title order={2} className="text-muted-foreground mt-1 font-semibold leading-tight text-lg">
            Guidelines for all of our community members.
          </Title>
        </Stack>
      </Group>

      <p>
        <b>Last updated:</b> March 21, 2024
      </p>

      <h3></h3>
      <p>
        <b>
          We believe that everyone should have access to free tools for gamification, productivity
          and social media
        </b>
        . Our guidelines are meant to build a mutual understanding of what being a part of this
        community is all about. We will take action if any of these guidelines are not upheld, so
        please read carefully.
      </p>

      <h2>Always be Respectful</h2>
      <p>
        We come together from across the world at varying experiences with the same goal in mind -
        to grow. Curiosity, questioning, and cultural understanding are something we celebrate. Be
        respectful of others and where they’re coming from.
      </p>

      <h2>Help and support across all skill levels</h2>
      <p>
        We are all in this together. Life-wide gamification and productivity is hard and takes a lot
        of courage and dedication. If someone makes "easy" mistakes or has a question you think has
        an obvious answer, kindly and calmly help them out. Heckling and being straight up mean
        doesn’t help anyone learn. Can’t say it nicely? Don’t weigh in.
      </p>

      <h2>Embrace and share differences</h2>
      <p>
        A language can have many words, accents and ways to say the same thing. We think that’s one
        of the wonders of languages. Approach these conversations with an open mind and attitude.
      </p>

      <h2>Think before you share</h2>
      <p>
        We care about your safety. Online communities are inherently social, but please beware of
        swapping or posting any private information that could be misused. That includes your phone
        number, age, address, what time you’ll be at home, school name, email, or other personal
        information that could put your privacy at risk. Simply put: don’t over-share. Sharing and
        encouraging others to share personal data might get your post, and possibly your account,
        removed.
      </p>

      <h2>Do Not...</h2>
      <p>
        <b>
          Please don’t use any of Dorkodu's Websites, Apps and any other Product/Services with bad
          and ingeniuine intentions.
        </b>
      </p>

      <h3>Don't attack anyone with words or actions.</h3>
      <p>
        Dorkodu is a safe place for members of all backgrounds. Harassment and hurtful content will
        not be tolerated. Using symbols, names and text that promote hate—as well as harassing,
        stalking, impersonating, and making sexual remarks towards someone—are considered abuse. The
        same goes for nudity and disturbing profile pictures and usernames. As stated in the terms,
        Dorkodu reserves the right to replace images or remove these accounts at its sole
        discretion.
      </p>
      <p>
        Rule of thumb: if you are making someone feel attacked or hurt, then you shouldn’t be doing
        it. We take these reports seriously and may delete your account without previous notice if
        such activity is verified by our team.
      </p>

      <h3>Don't script or cheat maliciously.</h3>
      <p>
        Dorkodu believes in honest effort. If you are scripting for the purposes of cheating or
        sharing information and instructions about using Dorkodu in a way that may impact the
        system, community, sharing, learning, data or experience in a negative or significant
        manner, your account and posts may be removed.
      </p>

      <h3>Don't write inflammatory comments.</h3>
      <p>
        Hateful, obscene and off-topic comments don’t contribute to learning. Cursing doesn’t either
        (let people discover those words in the wild). Leave them out of the language discussions.
      </p>

      <h3>To Summarize</h3>
      <p>We do not tolerate content that is:</p>

      <ul>
        <li>Illegal</li>
        <li>Pornographic</li>
        <li>Excessively profane or violent</li>
        <li>Spam</li>
        <li>Threatening, harassing, or bullying</li>
        <li>Associated with racism or intolerance</li>
        <li>Impersonating someone in a misleading or deceptive manner</li>
        <li>Personal confidential information</li>
      </ul>

      <p>
        <b>Please don't waste your time looking for loopholes.</b> We will remove any content that
        violates the spirit of these guidelines and you will risk losing partial or full access to
        Dorkodu without warning. By following these guidelines, we will all contribute to an
        interesting and helpful learning community.
      </p>
    </Container>
  );
}
