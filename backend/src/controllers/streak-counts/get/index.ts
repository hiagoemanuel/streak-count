import { StreakCountCollectionType } from '../../../schemas/streakCount'
import { internalServerError, ok } from '../../helpers'
import { HttpResponse } from '../../protocols'
import { IGetStrekCountsController, IGetStrekCountsRepository } from './protocols'

export class GetStreakCountsController implements IGetStrekCountsController {
  constructor(private readonly getStreakCountsRepository: IGetStrekCountsRepository) {}

  async handler(): Promise<HttpResponse<StreakCountCollectionType[] | null>> {
    try {
      const streakCounsts = await this.getStreakCountsRepository.getStreakCounts()  
      return ok<StreakCountCollectionType[]>(streakCounsts, 'All streak counts were received')
    } catch (err) {
      return internalServerError<null>(null, String(err))
    }
  }
}
