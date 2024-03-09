import bcrypt from 'bcrypt'

import { ICreateUserRepository } from '../../controllers/create-user/protocols'
import { MongoClient } from '../../database/mongodb'
import { CreateUserParamsType, UserType } from '../../schemas/user'

export class MongoCreateUserRepository implements ICreateUserRepository {
  async createUser(userParams: CreateUserParamsType): Promise<UserType> {
    const userSchema: Omit<UserType, 'id'> = {
      name: userParams.name,
      createdAt: new Date(),
      credentials: {
        email: userParams.email,
        password: bcrypt.hashSync(userParams.password, 10)
      },
      streakCounts: []
    }

    const userAlreadyExists = await MongoClient.db
      .collection<Omit<UserType, 'id'>>('users')
      .findOne({ $or: [{ 'credentials.email': userParams.email }, { name: userParams.name }] }, { projection: ['_id'] })

    if (userAlreadyExists !== null) throw new Error('This user already exists')

    const { insertedId } = await MongoClient.db.collection('users').insertOne(userSchema)

    const user = await MongoClient.db.collection<Omit<UserType, 'id'>>('users').findOne({ _id: insertedId })

    if (!user) throw new Error('User was not created')
    const { _id, ...rest } = user

    return { id: _id.toHexString(), ...rest }
  }
}
