import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_www/legal/company")({
  component: Company,
});

export function Company() {
  return (
    <Box my={50} id="company">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Stack gap={4} justify="center" maw={500} mx="auto">
          <Group wrap="nowrap">
            <Emoji emoji="💼" size={32} />
            <Stack gap={0}>
              <Title order={2} fw={750} lh={1}>
                Company
              </Title>
              {/* <Text span inherit variant="gradient" gradient={{ from: "#17CC38", to: "#6BD731", deg: 60 }}> Gamification</Text> */}
              <Title order={4} c="dimmed" fw={600} size={18}>
                Explore what we can do together.
              </Title>
            </Stack>
          </Group>

          <Group gap="xs" my={8}>
            <ActionIcon
              size="xl"
              color="dark"
              component="a"
              href="https://x.com/dorkodu"
              target="_blank"
            >
              <IconBrandX />
            </ActionIcon>
            <ActionIcon
              size="xl"
              gradient={{ from: "cyan", to: "blue" }}
              variant="gradient"
              component="a"
              href="https://t.me/dorkodu"
              target="_blank"
            >
              <IconBrandTelegram />
            </ActionIcon>
            <ActionIcon
              size="xl"
              color="gray"
              component="a"
              href="https://github.com/dorkodu"
              target="_blank"
            >
              <IconBrandGithub size={26} />
            </ActionIcon>
            <ActionIcon
              size="xl"
              color="red.7"
              component="a"
              href="https://github.com/dorkodu"
              target="_blank"
            >
              <IconBrandYoutube />
            </ActionIcon>
            <ActionIcon
              size="xl"
              gradient={{ from: "violet", to: "orange", deg: -220 }}
              variant="gradient"
              component="a"
              href="https://instagram.com/dorkodu"
              target="_blank"
            >
              <IconBrandInstagram size={28} />
            </ActionIcon>
          </Group>
        </Stack>

        <div>
          <Alert title="Info" icon={<IconInfoCircle size={28} />}>
            <Text size="sm">We are not legally incorporated yet.</Text>
          </Alert>
        </div>
      </SimpleGrid>
    </Box>
  );
}
