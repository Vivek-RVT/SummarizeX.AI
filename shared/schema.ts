import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const summaries = pgTable("summaries", {
  id: serial("id").primaryKey(),
  originalText: text("original_text").notNull(),
  summaryText: text("summary_text").notNull(),
  wordCount: integer("word_count").notNull(),
  compressionRatio: integer("compression_ratio").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertSummarySchema = createInsertSchema(summaries).pick({
  originalText: true,
  summaryText: true,
  wordCount: true,
  compressionRatio: true,
});

export type InsertSummary = z.infer<typeof insertSummarySchema>;
export type Summary = typeof summaries.$inferSelect;

// API request/response schemas
export const summarizeRequestSchema = z.object({
  text: z.string().min(50, "Text must be at least 50 characters long"),
  type: z.enum(["text", "pdf"]).default("text"),
});

export type SummarizeRequest = z.infer<typeof summarizeRequestSchema>;

export const summarizeResponseSchema = z.object({
  summary: z.string(),
  wordCount: z.number(),
  compressionRatio: z.number(),
  originalLength: z.number(),
});

export type SummarizeResponse = z.infer<typeof summarizeResponseSchema>;

// Keep original user schema for compatibility
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
