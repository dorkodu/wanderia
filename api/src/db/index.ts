import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
// You can specify any property from the node-postgres connection options

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  database: process.env.POSTGRES_DB,
  ssl: false,
});

export const db = drizzle(pool);

// Export a DB initializer to be used in index.ts
export async function initDb() {
  try {
    const client = await pool.connect();
    await client.query('SELECT 1'); // test connection
    client.release();

    console.log('✅ Connected to PostgreSQL successfully.');
  } catch (err) {
    console.error('❌ Failed to connect to PostgreSQL (continuing in mock mode):', err);
    // Do not exit; allow application to run with in-memory/mock repositories
  }
}
