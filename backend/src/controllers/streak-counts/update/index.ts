import { StreakCountType } from '../../../schemas/streakCount'
import { internalServerError, ok } from '../../helpers'
import { HttpRequest, Params, HttpResponse } from '../../protocols'
import { IUpdateStreakCountController, IUpdateStreakCountRepository } from './protocols'

export class UpdateStreakCountController implements IUpdateStreakCountController {
  constructor(private readonly updateStreakCountRepository: IUpdateStreakCountRepository) {}

  async handler(req: HttpRequest<Params<{ id: string }>>): Promise<HttpResponse<StreakCountType>> {
    try {
      const streakCountUpdated = await this.updateStreakCountRepository.updateStreakCount(req.params)

      return ok<StreakCountType>(streakCountUpdated, 'The streak count was updated')
    } catch (err) {
      return internalServerError<null>(null, String(err))
    }
  }
}
