import { StreakCount } from './streakCount'

export interface User {
  id: string
  name: string
  createdAt: Date
  credentials: {
    email: string
    password: string
  }
  streakCount: StreakCount[]
}
