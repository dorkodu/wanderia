import { integer, pgTable as table, varchar } from "drizzle-orm/pg-core"

export const notesTable = table('notes', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 256 }).notNull(),
  content: varchar({ length: 1024 }).notNull(),
  // createdAt: integer().notNull(),
})