import { cors } from "@elysiajs/cors";
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import 'dotenv/config';
import { Elysia } from 'elysia';
import { db, initDb } from './db';
import { betterAuthMiddleware } from "./namespaces/auth/endpoints";
import { appRouter } from "./router";

const app = new Elysia()

  .use(
    cors({
      origin: ["http://localhost:5173", "https://trekie.io", "http://trekie.io"],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  )

  .use(betterAuthMiddleware)

  .all('/trpc/*',
    (c) => {
      return fetchRequestHandler({
        endpoint: '/trpc',
        req: c.request,
        router: appRouter,
        createContext: ({ req }) => ({ req, res: new Response(), session: undefined }),
      });
    },
    {
      auth: true,
    }
  )

  .decorate('db', db)

  .get('/', () => 'Welcome to Trekie API -- this is the index.')

  .post("/echo", ({ body }) => { return body; })

  .onRequest(({ request }) => {
    console.log(`[GLOBAL] ${request.method} ${request.url}`);
  })

  .listen(8000);

async function main() {
  await initDb();
  console.log('🚀 Server is running at http://localhost:8000');
}

main().catch(console.error);