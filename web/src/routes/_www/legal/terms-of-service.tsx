import { createFileRoute } from "@tanstack/react-router";
import Emoji from "@web/components/misc/Emoji";
import { Container } from "@web/components/ui/container";
import { Group, Stack } from "@web/components/ui/layout";
import { Title } from "@web/components/ui/title";

export const Route = createFileRoute("/_www/legal/terms-of-service")({
  component: TermsOfService,
});

export function TermsOfService() {
  return (
    <Container size={760}>
      <Group wrap="nowrap">
        <Emoji emoji="📄" size={36} />
        <Stack gap={0}>
          <Title order={1} fw={750} lh={1}>
            Terms of Service
          </Title>
          {/* <Text span inherit variant="gradient" gradient={{ from: "#17CC38", to: "#6BD731", deg: 60 }}> Gamification</Text> */}
          <Title order={2} c="dimmed" fw={600} size={18}>
            Governance rules, rights and responsibilities.
          </Title>
        </Stack>
      </Group>

      <p>
        These Terms of Service ("Terms") govern your use of , accessible at{" "}
        <a href="https://dorkodu.com">https://dorkodu.com</a>. Please read these Terms carefully
        before accessing or using the website. Your access to and use of the service is conditioned
        on your acceptance of and compliance with these Terms. These Terms apply to all visitors,
        users, and others who access or use the service.
      </p>
      <p>
        By accessing or using the service, you agree to be bound by these Terms. If you disagree
        with any part of the terms, then you may not access the service.
      </p>
      <h2>Accounts</h2>
      <p>
        When you create an account with us, you must provide accurate, complete, and current
        information at all times. Failure to do so constitutes a breach of the Terms, which may
        result in immediate termination of your account on our service.
      </p>
      <p>
        You are responsible for safeguarding the password that you use to access the service and for
        any activities or actions under your password, whether your password is with our service or
        a third-party service.
      </p>
      <p>
        You agree not to disclose your password to any third party. You must notify us immediately
        upon becoming aware of any breach of security or unauthorized use of your account.
      </p>
      <h2>Intellectual Property</h2>
      <p>
        The service and its original content, features, and functionality are and will remain the
        exclusive property of Dorkodu and its licensors. The service is protected by copyright,
        trademark, and other laws of both the Turkey and foreign countries. Our trademarks and trade
        dress may not be used in connection with any product or service without the prior written
        consent of Dorkodu.
      </p>
      <h2>Links To Other Websites</h2>
      <p>
        Our service may contain links to third-party websites or services that are not owned or
        controlled by Dorkodu.
      </p>
      <p>
        Dorkodu has no control over, and assumes no responsibility for, the content, privacy
        policies, or practices of any third-party websites or services. You further acknowledge and
        agree that Dorkodu shall not be responsible or liable, directly or indirectly, for any
        damage or loss caused or alleged to be caused by or in connection with the use of or
        reliance on any such content, goods, or services available on or through any such websites
        or services.
      </p>
      <p>
        We strongly advise you to read the terms and conditions and privacy policies of any
        third-party websites or services that you visit.
      </p>
      <h2>Termination</h2>
      <p>
        We may terminate or suspend your account immediately, without prior notice or liability, for
        any reason whatsoever, including without limitation if you breach the Terms.
      </p>
      <p>
        Upon termination, your right to use the service will immediately cease. If you wish to
        terminate your account, you may simply discontinue using the service.
      </p>
      <h2>Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of the Republic of
        Turkey, without regard to its conflict of law provisions.
      </p>
      <p>
        Our failure to enforce any right or provision of these Terms will not be considered a waiver
        of those rights. If any provision of these Terms is held to be invalid or unenforceable by a
        court, the remaining provisions of these Terms will remain in effect. These Terms constitute
        the entire agreement between us regarding our service and supersede and replace any prior
        agreements we might have between us regarding the service.
      </p>
      <h2>Changes</h2>
      <p>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
        If a revision is material, we will try to provide at least 30 days' notice prior to any new
        terms taking effect. What constitutes a material change will be determined at our sole
        discretion.
      </p>
      <p>
        By continuing to access or use our service after those revisions become effective, you agree
        to be bound by the revised terms. If you do not agree to the new terms, please stop using
        the service.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at{" "}
        <a href="mailto:hey@dorkodu.com">hey@dorkodu.com</a>.
      </p>
    </Container>
  );
}
