import { ObjectId } from 'mongodb'
import { IGetUserRepository } from '../../../controllers/users/get/protocols'
import { MongoClient } from '../../../database/mongodb'
import { UserType } from '../../../schemas/user'

export class MongoGetUsersRepository implements IGetUserRepository {
  async getUsers(): Promise<UserType[]> {
    const users = await MongoClient.db
      .collection<Omit<UserType, 'id'>>(process.env.MONGODB_COLLECTION ?? '')
      .find({})
      .toArray()

    return users.map(({ _id, ...rest }) => ({
      id: _id.toHexString(),
      ...rest
    }))
  }

  async getOneUser(id: string): Promise<UserType> {
    const user = await MongoClient.db
      .collection<Omit<UserType, 'id'>>(process.env.MONGODB_COLLECTION ?? '')
      .findOne({ _id: new ObjectId(id) })

    if (!user) throw 'User was not found, try again'

    const { _id, ...rest } = user

    return { id: _id.toHexString(), ...rest }
  }
}
