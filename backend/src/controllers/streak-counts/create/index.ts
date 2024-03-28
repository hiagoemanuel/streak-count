import { StreakCountSchema, type StreakCountType } from '../../../schemas/streakCount'
import { badRequest, created, internalServerError } from '../../helpers'
import { type Body, type HttpRequest, type HttpResponse } from '../../protocols'
import {
  type ICrateStreakCountParams,
  type ICreateStreakCountController,
  type ICreateStreakCountRepository,
} from './protocols'

export class CreateStreakCountController implements ICreateStreakCountController {
  constructor(private readonly createStreakCountRepository: ICreateStreakCountRepository) {}

  async handler(
    req: HttpRequest<Body<ICrateStreakCountParams>>,
  ): Promise<HttpResponse<StreakCountType>> {
    try {
      const nameIsValid = StreakCountSchema.shape.name.safeParse(req.body.name)
      if (!nameIsValid.success) return badRequest<null>(null, nameIsValid.error.message)
      const streakCountCreated = await this.createStreakCountRepository.createStreakCount(req.body)
      return created<StreakCountType>(streakCountCreated, 'Your streak count was created')
    } catch (err) {
      return internalServerError<null>(null, String(err))
    }
  }
}
