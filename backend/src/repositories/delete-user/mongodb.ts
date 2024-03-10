import { IDeleteUserRepository } from '../../controllers/delete-user/protocols'
import { MongoClient } from '../../database/mongodb'
import { UserType } from '../../schemas/user'
import { ObjectId } from 'mongodb'

export class MongoDeleteUserRepository implements IDeleteUserRepository {
  async deleteUser(userId: string): Promise<UserType> {
    const userDeleted = await MongoClient.db
      .collection<Omit<UserType, 'id'>>('users')
      .findOneAndDelete({ _id: new ObjectId(userId) })

    if (!userDeleted) throw 'This user does not exists'

    const { _id, ...rest } = userDeleted

    return { id: _id.toHexString(), ...rest }
  }
}
