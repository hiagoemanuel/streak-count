import { ObjectId } from 'mongodb'
import {
  ICrateStreakCountParams,
  ICreateStreakCountRepository
} from '../../../controllers/streak-counts/create/protocols'
import { MongoClient } from '../../../database/mongodb'
import { StreakCountType } from '../../../schemas/streakCount'
import { UserType } from '../../../schemas/user'

export class MongoCreateStreakCountRepository implements ICreateStreakCountRepository {
  async createStreakCount(req: ICrateStreakCountParams): Promise<StreakCountType> {
    const streakCountList = await MongoClient.db
      .collection<Omit<UserType, 'id'>>(process.env.MONGODB_COLLECTION ?? '')
      .findOne({ _id: new ObjectId(req.userId) }, { projection: ['streakCounts'] })

    if (!streakCountList) throw 'Streak count was not created'

    const streakCountId = req.name.split(' ').join('%20') + '-' + req.userId

    for (const sc of streakCountList.streakCounts) {
      if (streakCountId === sc.id) throw 'This name is already used'
    }

    const streakCountSchema: StreakCountType = {
      id: streakCountId,
      name: req.name,
      createdAt: new Date(),
      count: 0
    }

    const newStreakCount = await MongoClient.db
      .collection<Omit<UserType, 'id'>>(process.env.MONGODB_COLLECTION ?? '')
      .findOneAndUpdate({ _id: new ObjectId(req.userId) }, { $push: { streakCounts: streakCountSchema } })

    if (!newStreakCount) throw 'Streak count was not created'

    return streakCountSchema
  }
}
