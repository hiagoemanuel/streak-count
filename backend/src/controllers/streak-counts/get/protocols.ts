import { UserType } from '../../../schemas/user'
import { HttpResponse } from '../../protocols'

export interface IGetStrekCountsController {
  handler: () => Promise<HttpResponse<UserType[] | null>>
}

export interface IGetStrekCountsRepository {
  getStreakCounts: () => Promise<UserType[]>
}
