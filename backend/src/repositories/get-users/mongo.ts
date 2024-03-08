import { IGetUserRepository } from '../../controllers/get-users/protocols'
import { MongoClient } from '../../database/mongodb'
import { User } from '../../models/user'

export class MongoGetUsersRepository implements IGetUserRepository {
  async getUsers() {
    const users = await MongoClient.db
      .collection<Omit<User, 'id'>>('users')
      .find({})
      .toArray()

    return users.map(({ _id, ...rest }) => ({
      id: _id.toHexString(),
      ...rest
    }))
  }
}
