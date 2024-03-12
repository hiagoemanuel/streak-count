import { IGetStrekCountsRepository } from '../../../controllers/streak-counts/get/protocols'
import { MongoClient } from '../../../database/mongodb'
import { StreakCountType } from '../../../schemas/streakCount'

export class MongoGetStreakCountsRepository implements IGetStrekCountsRepository {
  async getStreakCounts(): Promise<StreakCountType[]> {
    const streakCounts = await MongoClient.db
      .collection<Omit<StreakCountType, 'id'>>('users')
      .find({ streakCounts: [] }, { projection: ['streakCounts', 'name'] })
      .toArray()

    return streakCounts.map(({ _id, ...rest }) => ({
      id: _id.toHexString(),
      ...rest
    }))
  }
}
