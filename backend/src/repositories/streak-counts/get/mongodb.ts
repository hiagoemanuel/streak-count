import { IGetStrekCountsRepository } from '../../../controllers/streak-counts/get/protocols'
import { MongoClient } from '../../../database/mongodb'
import { StreakCountCollectionType } from '../../../schemas/streakCount'

export class MongoGetStreakCountsRepository implements IGetStrekCountsRepository {
  async getStreakCounts(): Promise<StreakCountCollectionType[]> {
    const streakCounts = await MongoClient.db
      .collection<Omit<StreakCountCollectionType, 'id'>>('streak-counts')
      .find({})
      .toArray()

    return streakCounts.map(({ _id, ...rest }) => ({
      id: _id.toHexString(),
      ...rest
    }))
  }
}
