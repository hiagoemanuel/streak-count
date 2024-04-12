import { type IDeleteStreakCountRepository } from '../../../controllers/streak-counts/delete/protocols'
import { MongoClient } from '../../../database/mongodb'
import { type StreakCountType } from '../../../schemas/streakCount'

export class MongoDeleteStreakCount implements IDeleteStreakCountRepository {
  async deleteStreakCount(params: { id: string }): Promise<StreakCountType> {
    const streakCountId = params.id.replaceAll(' ', '%20')

    const user = await MongoClient.collection.findOneAndUpdate(
      { 'streakCounts.id': streakCountId },
      { $pull: { streakCounts: { id: { $in: [streakCountId] } } } },
    )

    if (!user) throw 'This streak count id does not exist'

    return user.streakCounts.filter((sc) => sc.id === params.id)[0]
  }
}
