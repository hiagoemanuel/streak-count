import { StreakCountDocType } from '../../../schemas/streakCount'
import { HttpResponse } from '../../protocols'

export interface IGetStrekCountsController {
  handler: () => Promise<HttpResponse<StreakCountDocType[] | null>>
}

export interface IGetStrekCountsRepository {
  getStreakCounts: () => Promise<StreakCountDocType[]>
}
