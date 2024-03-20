import { IGetStrekCountsRepository } from '../../../controllers/streak-counts/get/protocols'
import { MongoClient } from '../../../database/mongodb'
import { StreakCountType } from '../../../schemas/streakCount'
import { UserType } from '../../../schemas/user'

export class MongoGetStreakCountsRepository implements IGetStrekCountsRepository {
  async getStreakCounts(): Promise<UserType[]> {
    const streakCounts = await MongoClient.db
      .collection<Omit<UserType, 'id'>>(process.env.MONGODB_COLLECTION ?? '')
      .find({}, { projection: ['streakCounts', 'name'] })
      .toArray()

    return streakCounts.map(({ _id, ...rest }) => ({
      id: _id.toHexString(),
      ...rest
    }))
  }

  async getStreakCountById(params: { id: string }): Promise<StreakCountType> {
    const streakCount = await MongoClient.db
      .collection<Omit<UserType, 'id'>>(process.env.MONGODB_COLLECTION ?? '')
      .findOne({ 'streakCounts.id': params.id }, { projection: ['streakCounts'] })

    if (!streakCount) throw 'Streak Count not found'

    return streakCount.streakCounts.filter((sc) => sc.id === params.id)[0]
  }
}
