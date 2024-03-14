import { StreakCountType } from '../../../schemas/streakCount'
import { HttpRequest, HttpResponse, Params } from '../../protocols'

export interface IDeleteStreakCountController {
  handler: (req: HttpRequest<Params<{ id: string }>>) => Promise<HttpResponse<StreakCountType>>
}

export interface IDeleteStreakCountRepository {
  deleteStreakCount: (params: { id: string }) => Promise<StreakCountType>
}
