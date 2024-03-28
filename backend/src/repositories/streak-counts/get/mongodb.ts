import { type IGetStrekCountsRepository } from '../../../controllers/streak-counts/get/protocols'
import { MongoClient } from '../../../database/mongodb'
import { type StreakCountType } from '../../../schemas/streakCount'
import { type UserType } from '../../../schemas/user'

export class MongoGetStreakCountsRepository implements IGetStrekCountsRepository {
  async getStreakCounts(): Promise<UserType[]> {
    const streakCounts = await MongoClient.collection
      .find({}, { projection: ['streakCounts', 'name'] })
      .toArray()

    return streakCounts.map(({ _id, ...rest }) => ({
      id: _id.toHexString(),
      ...rest,
    }))
  }

  async getStreakCountById(params: { id: string }): Promise<StreakCountType> {
    const streakCount = await MongoClient.collection.findOne(
      { 'streakCounts.id': params.id },
      { projection: ['streakCounts'] },
    )

    if (!streakCount) throw 'Streak Count not found'

    return streakCount.streakCounts.filter((sc) => sc.id === params.id)[0]
  }
}
