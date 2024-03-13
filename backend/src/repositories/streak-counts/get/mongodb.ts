import { IGetStrekCountsRepository } from '../../../controllers/streak-counts/get/protocols'
import { MongoClient } from '../../../database/mongodb'
import { UserType } from '../../../schemas/user'

export class MongoGetStreakCountsRepository implements IGetStrekCountsRepository {
  async getStreakCounts(): Promise<UserType[]> {
    const streakCounts = await MongoClient.db
      .collection<Omit<UserType, 'id'>>('users')
      .find({ streakCounts: [] }, { projection: ['streakCounts', 'name'] })
      .toArray()

    return streakCounts.map(({ _id, ...rest }) => ({
      id: _id.toHexString(),
      ...rest
    }))
  }
}
