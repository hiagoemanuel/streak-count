import { StreakCountType } from '../../../schemas/streakCount'
import { UserType } from '../../../schemas/user'
import { HttpRequest, HttpResponse, Params } from '../../protocols'

export interface IGetStrekCountsController {
  handler: () => Promise<HttpResponse<UserType[]>>
  handlerOneStreakCount: (req: HttpRequest<Params<{ id: string }>>) => Promise<HttpResponse<StreakCountType>>
}

export interface IGetStrekCountsRepository {
  getStreakCounts: () => Promise<UserType[]>
  getStreakCountById: (params: { id: string }) => Promise<StreakCountType>
}
