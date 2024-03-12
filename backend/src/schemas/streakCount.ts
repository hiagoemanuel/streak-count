import { z } from 'zod'

export const StreakCountSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  name: z.string(),
  count: z.string()
})

export const StreakCountCollectionSchema = z.object({
  id: z.string(),
  streakCounts: z.array(StreakCountSchema)
})

export type StreakCountType = z.infer<typeof StreakCountSchema>
export type StreakCountCollectionType = z.infer<typeof StreakCountCollectionSchema>
