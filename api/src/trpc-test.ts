import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { Router, type Router } from '@api/lib/trpc';

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:8000/trpc',
    }),
  ],
});

async function main() {
  const result = await trpc.greet.query();
  console.log(result);
}

main();
