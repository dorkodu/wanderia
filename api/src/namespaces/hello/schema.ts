import { commonSchemas } from "@api/commons/schemas"
import { IGoal, IGoalTemplate } from "@web/namespaces/goal"
import { z } from "zod"

export const getGoal = z.strictObject({
  id: commonSchemas.id,
})

export const getGoalsByUser = z.strictObject({
  userId: commonSchemas.id.optional(),
  cursor: commonSchemas.id.optional(),
  direction: commonSchemas.direction,
})

export const updateGoal = z.strictObject({
  id: commonSchemas.id,
  fields: IGoalTemplate.partial(),
})

export const createGoal = z.strictObject({
  goal: IGoal
})

export * as goalSchemas from "./schema"

