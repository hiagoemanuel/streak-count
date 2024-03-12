import { StreakCountCollectionType } from '../../../schemas/streakCount'
import { HttpResponse } from '../../protocols'

export interface IGetStrekCountsController {
  handler: () => Promise<HttpResponse<StreakCountCollectionType[] | null>>
}

export interface IGetStrekCountsRepository {
  getStreakCounts: () => Promise<StreakCountCollectionType[]>
}