import { UserType } from '../../../schemas/user'
import { created, internalServerError } from '../../helpers'
import { HttpResponse } from '../../protocols'
import { IGetStrekCountsController, IGetStrekCountsRepository } from './protocols'

export class GetStreakCountsController implements IGetStrekCountsController {
  constructor(private readonly getStreakCountsRepository: IGetStrekCountsRepository) {}

  async handler(): Promise<HttpResponse<UserType[]>> {
    try {
      const streakCounsts = await this.getStreakCountsRepository.getStreakCounts()
      return created<UserType[]>(streakCounsts, 'All streak counts were received')
    } catch (err) {
      return internalServerError<null>(null, String(err))
    }
  }
}
