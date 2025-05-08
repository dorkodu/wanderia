import { resolve } from 'bun'
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import { migrate } from 'drizzle-orm/node-postgres/migrator'

// You can specify any property from the node-postgres connection options

export const config = {
  connection: {
    connectionString: process.env.DATABASE_URL,
  }
}

export const db = drizzle(config)

// await migrate(db, { migrationsFolder: await resolve(__dirname, './drizzle') })
