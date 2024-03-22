import { IDeleteStreakCountRepository } from '../../../controllers/streak-counts/delete/protocols'
import { MongoClient } from '../../../database/mongodb'
import { StreakCountType } from '../../../schemas/streakCount'
import { UserType } from '../../../schemas/user'

export class MongoDeleteStreakCount implements IDeleteStreakCountRepository {
  async deleteStreakCount(params: { id: string }): Promise<StreakCountType> {
    const user = await MongoClient.collection.findOneAndUpdate(
      { 'streakCounts.id': params.id },
      { $pull: { streakCounts: { id: { $in: [params.id] } } } }
    )

    if (!user) throw 'This streak count id does not exist'

    return user.streakCounts.filter((sc) => sc.id === params.id)[0]
  }
}
