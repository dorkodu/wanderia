import { Elysia } from 'elysia'

import { trpc } from '@elysiajs/trpc'
import { router } from './router'

import { initDb } from './db';
import { db } from './db'; // still needed if you use db in handlers

const app = new Elysia()


app.get('/', () => '');
app.decorate('db', db);
app.use(trpc(router))

async function main() {
  await initDb();
  app.listen(3000);
  console.log('🚀 Server is running at http://localhost:3000');
}

main();
