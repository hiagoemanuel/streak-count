import { UserType } from '../../../schemas/user'
import { HttpResponse } from '../../protocols'

export interface IGetStrekCountsController {
  handler: () => Promise<HttpResponse<UserType[]>>
}

export interface IGetStrekCountsRepository {
  getStreakCounts: () => Promise<UserType[]>
}
