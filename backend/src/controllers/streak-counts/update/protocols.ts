import { StreakCountType } from '../../../schemas/streakCount'
import { HttpRequest, HttpResponse, Params } from '../../protocols'

export interface IUpdateStreakCountController {
  handler: (req: HttpRequest<Params<{ id: string }>>) => Promise<HttpResponse<StreakCountType>>
}

export interface IUpdateStreakCountRepository {
  updateStreakCount: (params: { id: string }) => Promise<StreakCountType> 
}
