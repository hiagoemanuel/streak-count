import { StreakCountCollectionType } from '../../../schemas/streakCount'
import { HttpResponse } from '../../protocols'

export interface IGetStrekCountsController {
  handler: (userId: string) => Promise<HttpResponse<StreakCountCollectionType | null>>
}

export interface IGetStrekCountsRepository {
  getStreakCounts: (userId: string) => Promise<StreakCountCollectionType>
}