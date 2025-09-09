import { initTRPC } from "@trpc/server";

interface Context {
  req: Request
  res: Response

  session?: Promise<{ id: string; userId: string } | undefined>
}

const t = initTRPC.context<Context>().create()

export const Router = t.router
export type Router = typeof Router

export const publicProcedure = t.procedure

export const authRequiredProcedure = publicProcedure.use(async (opts) => {
  /**
   * const token = tokenUtil.getSession(opts.ctx.req)
  if (!token) throw new TRPCError({ code: "UNAUTHORIZED" })
  // if no session, get session by token
  // const session = await opts.ctx.session
  if (!session) throw new TRPCError({ code: "UNAUTHORIZED" })
   */

  //TODO: replace null with actual session
  return opts.next({ ctx: { session: null } })
})

export const authOptionalProcedure = publicProcedure.use(async (opts) => {
  /*
  if (opts.ctx.session === undefined) {
    const token = tokenUtil.getSession(opts.ctx.req)
    if (token) opts.ctx.session = authRepository.getSessionByToken(token)
  }

  const session = await opts.ctx.session
*/

  //TODO: replace null with actual session
  return opts.next({ ctx: { session: null } })
})
