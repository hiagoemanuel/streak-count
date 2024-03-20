import { StreakCountType, UpdateStreakCountParams, UpdateStreakCountParamsType } from '../../../schemas/streakCount'
import { badRequest, internalServerError, ok } from '../../helpers'
import { HttpRequest, Params, HttpResponse, Body } from '../../protocols'
import { IUpdateStreakCountController, IUpdateStreakCountRepository } from './protocols'

export class UpdateStreakCountController implements IUpdateStreakCountController {
  constructor(private readonly updateStreakCountRepository: IUpdateStreakCountRepository) {}

  async handler(
    req: HttpRequest<Body<UpdateStreakCountParamsType> & Params<{ id: string }>>
  ): Promise<HttpResponse<StreakCountType>> {
    try {
      const validFields = UpdateStreakCountParams.safeParse(req.body)

      if (!validFields.success) {
        const message = validFields.error.issues
          .map((issue) => `Field ${issue.path}: ${issue.message.toLowerCase()}`)
          .reduce((prev, curr) => `${prev} and ${curr}`)
        return badRequest<null>(null, message)
      }

      const streakCountUpdated = await this.updateStreakCountRepository.updateStreakCount(req.params)

      return ok<StreakCountType>(streakCountUpdated, 'The streak count was updated')
    } catch (err) {
      return internalServerError<null>(null, String(err))
    }
  }
}
