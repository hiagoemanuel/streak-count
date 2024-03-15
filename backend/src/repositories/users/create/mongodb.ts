import bcrypt from 'bcrypt'

import { ICreateUser, ICreateUserRepository } from '../../../controllers/users/create/protocols'
import { MongoClient } from '../../../database/mongodb'
import { CreateUserParamsType, UserType } from '../../../schemas/user'
import { MongoQueryDbRepository } from '../../query-db/mongodb'

export class MongoCreateUserRepository implements ICreateUserRepository {
  async createUser(userParams: CreateUserParamsType): Promise<ICreateUser> {
    const findNameOrEmail = await new MongoQueryDbRepository().findNameOrEmail(userParams.name, userParams.email)

    if (!findNameOrEmail) throw 'boh'

    if (findNameOrEmail.wasFound) {
      return {
        user: null,
        dbConsult: {
          message: findNameOrEmail.message,
          userFound: findNameOrEmail.wasFound
        }
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

    const user = await MongoClient.db
      .collection<Omit<UserType, 'id'>>(process.env.MONGODB_COLLECTION ?? '')
      .findOne({ _id: insertedId })

    if (!user) throw new Error('The user was not created')

    const { _id, ...rest } = user

    return {
      user: { id: _id.toHexString(), ...rest },
      dbConsult: {
        message: findNameOrEmail.message,
        userFound: findNameOrEmail.wasFound
      }
    }
  }
}
