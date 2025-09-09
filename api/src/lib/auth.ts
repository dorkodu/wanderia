import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { username } from "better-auth/plugins";

import { db } from "../db";
import * as schema from "../namespaces/auth/schemas/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, { schema, provider: "pg" }),
  plugins: [
    username()
  ],
  baseURL: "http://localhost:8000",
  basePath: "/auth",
  trustedOrigins: ["http://localhost:5173"],
  emailAndPassword: { enabled: true },
  socialProviders: {

  },
})