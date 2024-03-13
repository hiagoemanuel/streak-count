import { StreakCountType } from '../../../schemas/streakCount'
import { HttpRequest, HttpResponse } from '../../protocols'

export interface ICreateStreakCountController {
  handler: (req: HttpRequest<ICrateStreakCountParams>) => Promise<HttpResponse<StreakCountType | null>>
}

export interface ICreateStreakCountRepository {
  createStreakCount: (req: ICrateStreakCountParams) => Promise<StreakCountType>
}

export interface ICrateStreakCountParams {
  userId: string
  name: string
}
