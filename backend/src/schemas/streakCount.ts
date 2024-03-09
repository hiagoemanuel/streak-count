import { z } from 'zod'

export const StreakCountSchema = z.object({
  id: z.string(),
  name: z.string(),
  count: z.number()
})
