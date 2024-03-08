import {
  ICreateUserParams,
  ICreateUserRepository
} from '../../controllers/create-user/protocols'
import { MongoClient } from '../../database/mongodb'
import { User } from '../../models/user'

export class MongoCreateUserRepository implements ICreateUserRepository {
  async createUser(userParams: ICreateUserParams): Promise<User> {
    const userSchema: Omit<User, 'id'> = {
      name: userParams.name,
      createdAt: new Date(),
      credentials: {
        email: userParams.email,
        password: userParams.password
      },
      streakCount: []
    }

    const { insertedId } = await MongoClient.db
      .collection('users')
      .insertOne(userSchema)
    const user = await MongoClient.db
      .collection<Omit<User, 'id'>>('users')
      .findOne({ _id: insertedId })

    if (!user) throw new Error('User not created')

    const { _id, ...rest } = user

    return { id: _id.toHexString(), ...rest }
  }
}
