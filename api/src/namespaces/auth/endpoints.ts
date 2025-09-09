import { auth } from "@api/lib/auth";
import { Elysia } from "elysia";

export const betterAuthMiddleware = new Elysia({ name: 'better-auth' })
  .mount(auth.handler)
  .macro({
    auth: {
      async resolve({ status, request: { headers } }) {
        const session = await auth.api.getSession({
          headers
        })

        if (!session) return status(401)

        return {
          user: session.user,
          session: session.session
        }
      }
    }
  })