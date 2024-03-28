import { type StreakCountType } from '../../../schemas/streakCount'
import { type HttpRequest, type HttpResponse, type Params } from '../../protocols'

export interface IDeleteStreakCountController {
  handler: (req: HttpRequest<Params<{ id: string }>>) => Promise<HttpResponse<StreakCountType>>
}

export interface IDeleteStreakCountRepository {
  deleteStreakCount: (params: { id: string }) => Promise<StreakCountType>
}
