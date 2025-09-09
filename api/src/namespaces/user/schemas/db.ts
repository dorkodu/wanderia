import { jsonb, pgTable, text, timestamp } from "drizzle-orm/pg-core";

import { user } from "@api/namespaces/auth/schemas/db";

// Store user preferences, settings and onboarding data (1:1 with user)
export const settings = pgTable("settings", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" })
    .unique(),
  preferences: jsonb("preferences"),
  config: jsonb("config"),
  onboarding: jsonb("onboarding"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});
