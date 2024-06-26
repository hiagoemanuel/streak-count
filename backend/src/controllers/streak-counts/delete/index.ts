import { type StreakCountType } from '../../../schemas/streakCount'
import { internalServerError, ok } from '../../helpers'
import { type HttpRequest, type Params, type HttpResponse } from '../../protocols'
import { type IDeleteStreakCountController, type IDeleteStreakCountRepository } from './protocols'

export class DeleteStreakCountController implements IDeleteStreakCountController {
  constructor(private readonly deleteStrekCountRepository: IDeleteStreakCountRepository) {}

  async handler(req: HttpRequest<Params<{ id: string }>>): Promise<HttpResponse<StreakCountType>> {
    try {
      const streakCountDeleted = await this.deleteStrekCountRepository.deleteStreakCount(req.params)
      return ok<StreakCountType>(streakCountDeleted, 'Streak Count was deleted')
    } catch (err) {
      return internalServerError<null>(null, String(err))
    }
  }
}
