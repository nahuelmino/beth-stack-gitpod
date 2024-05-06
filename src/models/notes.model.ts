import { sql } from "drizzle-orm";
import { sqliteTable, integer, text, blob } from "drizzle-orm/sqlite-core";

export const note = sqliteTable("note", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("name").notNull(),
  body: text("body").notNull(),
  createdAt: blob("created_at", {
    mode: "bigint",
  }).notNull().default(sql`(CURRENT_DATE)`),
});

export type Note = typeof note.$inferSelect;
