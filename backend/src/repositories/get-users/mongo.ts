import { IGetUserRepository } from '../../controllers/get-users/protocols'
import { MongoClient } from '../../database/mongodb'
import { UserType } from '../../schemas/user'

export class MongoGetUsersRepository implements IGetUserRepository {
  async getUsers(): Promise<UserType[]> {
    const users = await MongoClient.db
      .collection<Omit<UserType, 'id'>>('users')
      .find({})
      .toArray()

    return users.map(({ _id, ...rest }) => ({
      id: _id.toHexString(),
      ...rest
    }))
  }
}
