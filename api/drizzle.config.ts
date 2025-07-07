import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

// This database definition is only for drizzlekit cli, won't be used in runtime.

export default defineConfig({
  out: './drizzle',
  schema: './src/namespaces/**/schema.ts', // Glob imports all the schemas from namespaces.
  dialect: 'postgresql',
  dbCredentials: {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST || "",
    port: Number(process.env.POSTGRES_PORT) || 5432,
    database: process.env.POSTGRES_DB || "",
    ssl: false,
  },
})