import { StreakCountType } from '../../../schemas/streakCount'
import { Body, HttpRequest, HttpResponse } from '../../protocols'

export interface ICreateStreakCountController {
  handler: (req: HttpRequest<Body<ICrateStreakCountParams>>) => Promise<HttpResponse<StreakCountType>>
}

export interface ICreateStreakCountRepository {
  createStreakCount: (body: ICrateStreakCountParams) => Promise<StreakCountType>
}

export interface ICrateStreakCountParams {
  userId: string
  name: string
}
