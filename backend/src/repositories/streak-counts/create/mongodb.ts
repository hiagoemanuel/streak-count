import { ObjectId } from 'mongodb'
import {
  ICrateStreakCountParams,
  ICreateStreakCountRepository
} from '../../../controllers/streak-counts/create/protocols'
import { MongoClient } from '../../../database/mongodb'
import { StreakCountType } from '../../../schemas/streakCount'
import { UserType } from '../../../schemas/user'
import { streakCounts } from '../../../routes/streak-counts'

export class MongoCreateStreakCountRepository implements ICreateStreakCountRepository {
  async createStreakCount(req: ICrateStreakCountParams): Promise<StreakCountType> {
    await MongoClient.db.collection<Omit<UserType, 'id'>>('users').findOneAndUpdate(
      { _id: new ObjectId(req.userId) },
      {
        $push: {
          streakCounts: {
            id: req.name + '-' + req.userId,
            name: req.name,
            createdAt: new Date(),
            count: 0
          }
        }
      }
    )

    const streakCount = await MongoClient.db
      .collection<Omit<UserType, 'id'>>('users')
      .findOne({ streakCounts }, { projection: ['streakCounts'] })

    if (!streakCount) throw 'Streak count was not created'

    return streakCount.streakCounts[streakCount.streakCounts.length - 1]
  }
}
