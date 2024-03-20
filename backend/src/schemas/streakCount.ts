import { z } from 'zod'

export const StreakCountSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  name: z.string().min(4).max(16),
  count: z.number()
})

export const UpdateStreakCountParams = z.object({
  name: StreakCountSchema.shape.name.optional(),
  count: StreakCountSchema.shape.count.optional()
})

export type StreakCountType = z.infer<typeof StreakCountSchema>
export type UpdateStreakCountParamsType = z.infer<typeof UpdateStreakCountParams>
