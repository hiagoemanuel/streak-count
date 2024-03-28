import { type StreakCountType } from '../../../schemas/streakCount'
import { type UserType } from '../../../schemas/user'
import { internalServerError, ok } from '../../helpers'
import { type HttpRequest, type HttpResponse, type Params } from '../../protocols'
import { type IGetStrekCountsController, type IGetStrekCountsRepository } from './protocols'

export class GetStreakCountsController implements IGetStrekCountsController {
  constructor(private readonly getStreakCountsRepository: IGetStrekCountsRepository) {}

  async handler(): Promise<HttpResponse<UserType[]>> {
    try {
      const streakCounsts = await this.getStreakCountsRepository.getStreakCounts()
      return ok<UserType[]>(streakCounsts, 'All streak counts were received')
    } catch (err) {
      return internalServerError<null>(null, String(err))
    }
  }

  async handlerOneStreakCount(
    req: HttpRequest<Params<{ id: string }>>,
  ): Promise<HttpResponse<StreakCountType>> {
    try {
      const streakCount = await this.getStreakCountsRepository.getStreakCountById(req.params)
      return ok<StreakCountType>(streakCount, 'Streak Count was found')
    } catch (err) {
      return internalServerError<null>(null, String(err))
    }
  }
}
