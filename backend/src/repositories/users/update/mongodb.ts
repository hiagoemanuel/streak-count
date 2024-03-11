import { ObjectId } from 'mongodb'
import { IUpdateUserRepository } from '../../../controllers/users/update/protocols'
import { MongoClient } from '../../../database/mongodb'
import { UpdateUseParamsType, UserType } from '../../../schemas/user'

export class MongoUpdateUserRepository implements IUpdateUserRepository {
  async updateUser(userId: string, userParams: UpdateUseParamsType): Promise<UserType> {
    await MongoClient.db
      .collection<Omit<UserType, 'id'>>('users')
      .updateOne({ _id: new ObjectId(userId) }, { $set: userParams })

    const user = await MongoClient.db.collection<Omit<UserType, 'id'>>('users').findOne({ _id: new ObjectId(userId) })

    if (!user) throw 'Unable to find user'

    const { _id, ...rest } = user

    return { id: _id.toHexString(), ...rest }
  }
}
