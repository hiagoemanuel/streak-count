import { z } from 'zod'

export const StreakCountSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  name: z.string().min(4).max(16),
  count: z.number()
})

export type StreakCountType = z.infer<typeof StreakCountSchema>