import { type StreakCountType } from '../../../schemas/streakCount'
import { type Body, type HttpRequest, type HttpResponse } from '../../protocols'

export interface ICreateStreakCountController {
  handler: (
    req: HttpRequest<Body<ICrateStreakCountParams>>,
  ) => Promise<HttpResponse<StreakCountType>>
}

export interface ICreateStreakCountRepository {
  createStreakCount: (body: ICrateStreakCountParams) => Promise<StreakCountType>
}

export interface ICrateStreakCountParams {
  userId: string
  name: string
}
