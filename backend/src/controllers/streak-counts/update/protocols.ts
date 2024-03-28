import {
  type StreakCountType,
  type UpdateStreakCountParamsType,
} from '../../../schemas/streakCount'
import { type Body, type HttpRequest, type HttpResponse, type Params } from '../../protocols'

export interface IUpdateStreakCountController {
  handler: (
    req: HttpRequest<Body<UpdateStreakCountParamsType> & Params<{ id: string }>>,
  ) => Promise<HttpResponse<StreakCountType>>
}

export interface IUpdateStreakCountRepository {
  updateStreakCount: (
    body: UpdateStreakCountParamsType,
    params: { id: string },
  ) => Promise<StreakCountType>
}
