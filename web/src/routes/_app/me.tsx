import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/me')({
  component: Me,
})

import { Flex } from "@web/components/ui/layout";
import { Text, Title } from "@web/components/ui/typography";
import { trekie } from "@web/lib/trekie";

function Me() {
  const user = trekie.use($ => $.user);

  const loading = false;

  if (loading) return "Loading...";

  return (
    <Flex className="flex flex-col m-4">
      <Title>Me</Title>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      {/* Add more profile details and self actions here */}
    </Flex>
  );
}
