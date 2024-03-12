import bcrypt from 'bcrypt'

import {
  ICheckUserAlreadyExists,
  ICreateUser,
  ICreateUserRepository
} from '../../../controllers/users/create/protocols'
import { MongoClient } from '../../../database/mongodb'
import { CreateUserParamsType, UserType } from '../../../schemas/user'

export class MongoCreateUserRepository implements ICreateUserRepository {
  async createUser(userParams: CreateUserParamsType): Promise<ICreateUser> {
    const userAlreadyExists = await this.checkUserAlreadyExists(userParams)
    if (userAlreadyExists.userFound) {
      return {
        user: null,
        dbConsult: userAlreadyExists
      }
    }

    const userSchema: Omit<UserType, 'id'> = {
      name: userParams.name,
      createdAt: new Date(),
      credentials: {
        email: userParams.email,
        password: bcrypt.hashSync(userParams.password, 10)
      },
      streakCounts: []
    }
    const { insertedId } = await MongoClient.db.collection('users').insertOne(userSchema)

    const user = await MongoClient.db.collection<Omit<UserType, 'id'>>('users').findOne({ _id: insertedId })

    if (!user) throw new Error('The user was not created')

    const { _id, ...rest } = user

    return {
      user: { id: _id.toHexString(), ...rest },
      dbConsult: userAlreadyExists
    }
  }

  async checkUserAlreadyExists(userParams: CreateUserParamsType): Promise<ICheckUserAlreadyExists> {
    const user = await MongoClient.db
      .collection<Omit<UserType, 'id'>>('users')
      .findOne(
        { $or: [{ 'credentials.email': userParams.email }, { name: userParams.name }] },
        { projection: ['name', 'credentials.email'] }
      )
    if (user?.name === userParams.name && user?.credentials.email === userParams.email) {
      return {userFound: true, message: 'This name and email is already used'}
    } else if (user?.name === userParams.name) {
      return { userFound: true, message: 'This name is already used' }
    } else if (user?.credentials.email === userParams.email) {
      return { userFound: true, message: 'This email is already used' }
    } else {
      return { userFound: false, message: 'The user was not found' }
    }
  }
}
