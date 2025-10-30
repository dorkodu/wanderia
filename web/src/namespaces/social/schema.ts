import { z } from "zod"

export type IHabit = z.infer<typeof IHabit>
export type IHabitTemplate = z.infer<typeof IHabitTemplate>

export const IHabitTemplate = z.object({
  title: z.string().min(1, 'Title cannot be empty'), // Added validation
  description: z.string().optional(), // Made optional
  dailyTarget: z.number().min(1, 'Daily target must be at least 1') // Added validation
})

export const IHabit = IHabitTemplate.extend({
  id: z.string().ulid(),
  count: z.number().min(0),
  createdAt: z.number(), // these are timestamp
  lastUpdated: z.number(),
  history: z.map(z.string(), z.number()),
  userId: z.string().ulid(),
  commitmentId: z.string().ulid()
})