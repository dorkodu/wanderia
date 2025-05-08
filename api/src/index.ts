import { Elysia } from 'elysia'

import { trpc } from '@elysiajs/trpc'
import { router } from './router'

const app = new Elysia()

  .get('/', () => '')

  // trpc
  .use(trpc(router))

  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)