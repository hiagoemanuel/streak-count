import { IDeleteUserRepository } from '../../../controllers/users/delete/protocols'
import { MongoClient } from '../../../database/mongodb'
import { UserType } from '../../../schemas/user'
import { ObjectId } from 'mongodb'

export class MongoDeleteUserRepository implements IDeleteUserRepository {
  async deleteUser(params: { id: string }): Promise<UserType> {
    const userDeleted = await MongoClient.db
      .collection<Omit<UserType, 'id'>>(process.env.MONGODB_COLLECTION ?? '')
      .findOneAndDelete({ _id: new ObjectId(params.id) })

    if (!userDeleted) throw 'This user does not exists'

    const { _id, ...rest } = userDeleted

    return { id: _id.toHexString(), ...rest }
  }
}
