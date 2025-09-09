import { cors } from "@elysiajs/cors";
import { trpc } from "@elysiajs/trpc";
import { Elysia } from 'elysia';
import { db, initDb } from './db';
import { Router } from './lib/trpc';
import { betterAuthMiddleware } from "./namespaces/auth/endpoints";
import { loadNamespaceEndpoints } from './utils/loadNamespaces';

const app = new Elysia()

  .use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
    })
  )
  .use(betterAuthMiddleware)

  .use(trpc(Router))

  .decorate('db', db)

  .get('/', () => 'Welcome to Trekie API -- this is the index.')

  .post("/echo", ({ body }) => { return body; })

  .onRequest(({ request }) => {
    console.log(`[GLOBAL] ${request.method} ${request.url}`);
  })

  .listen(8000);


async function main() {
  await initDb();
  await loadNamespaceEndpoints(app);

  console.log('🚀 Server is running at http://localhost:8000');
}

main();