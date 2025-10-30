import type { authClient } from "./client"

export type User = typeof authClient.$Infer.Session.user
export type Session = typeof authClient.$Infer.Session.session