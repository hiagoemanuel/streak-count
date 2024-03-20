import { StreakCountType, UpdateStreakCountParamsType } from '../../../schemas/streakCount'
import { Body, HttpRequest, HttpResponse, Params } from '../../protocols'

export interface IUpdateStreakCountController {
  handler: (
    req: HttpRequest<Body<UpdateStreakCountParamsType> & Params<{ id: string }>>
  ) => Promise<HttpResponse<StreakCountType>>
}

export interface IUpdateStreakCountRepository {
  updateStreakCount: (params: { id: string }) => Promise<StreakCountType>
}
