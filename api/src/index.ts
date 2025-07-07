import { Elysia } from 'elysia'
import { trpc } from '@elysiajs/trpc'
import { router } from './router'
import { initDb } from './db';
import { db } from './db'; // still needed if you use db in handlers
import { cors } from "@elysiajs/cors";
import { loadNamespaceEndpoints } from './utils/loadNamespaces';

const app = new Elysia()

app.get('/', () => '');
app.decorate('db', db);
app.use(trpc(router));

app.use(cors({
  origin:"http:localhost:3000",
  methods:["GET","POST","PUT","DELETE","OPTIONS"],
  credentials:true,
  allowedHeaders: ["Content-Type","Authorization"]
}))

async function main() {
  await initDb();
  await loadNamespaceEndpoints(app); // 💥 dinamik route ekleme
  app.listen(3000);
  console.log('🚀 Server is running at http://localhost:3000');
}

main();
