import { type IDeleteUserRepository } from '../../../controllers/users/delete/protocols'
import { MongoClient } from '../../../database/mongodb'
import { type UserType } from '../../../schemas/user'
import { ObjectId } from 'mongodb'

export class MongoDeleteUserRepository implements IDeleteUserRepository {
  async deleteUser(params: { id: string }): Promise<UserType> {
    const userDeleted = await MongoClient.collection.findOneAndDelete({
      _id: new ObjectId(params.id),
    })

    if (!userDeleted) throw 'This user does not exists'

    const { _id, ...rest } = userDeleted

    return { id: _id.toHexString(), ...rest }
  }
}
