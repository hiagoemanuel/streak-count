import { IUpdateStreakCountRepository } from '../../../controllers/streak-counts/update/protocols'
import { MongoClient } from '../../../database/mongodb'
import { StreakCountType, UpdateStreakCountParamsType } from '../../../schemas/streakCount'
import { UserType } from '../../../schemas/user'
import { MongoQueryDbRepository } from '../../query-db/mongodb'

export class MongoUpadateStreakCountRepository implements IUpdateStreakCountRepository {
  async updateStreakCount(body: UpdateStreakCountParamsType, params: { id: string }): Promise<StreakCountType> {
    const canUpdate = await new MongoQueryDbRepository().canUpdateStreakCount(body.name, params.id)
    const dbReturn = canUpdate.dbReturn

    if (canUpdate.wasFound) throw canUpdate.message

    const newId = dbReturn?.id.replace(dbReturn.name, body.name ?? dbReturn.name)

    await MongoClient.db.collection<Omit<UserType, 'id'>>(process.env.MONGODB_COLLECTION ?? '').updateOne(
      { 'streakCounts.id': params.id },
      {
        $set: {
          'streakCounts.$.id': newId,
          'streakCounts.$.name': body.name ?? dbReturn?.name,
          'streakCounts.$.count': body.count ?? dbReturn?.count
        }
      }
    )

    const streakCount = await MongoClient.db
      .collection<Omit<UserType, 'id'>>(process.env.MONGODB_COLLECTION ?? '')
      .findOne({ 'streakCounts.id': newId })

    if (!streakCount) throw 'Streak count was not found'

    return streakCount.streakCounts.filter((sc) => sc.id === newId)[0]
  }
}
