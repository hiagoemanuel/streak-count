import bcrypt from 'bcrypt'
import { ObjectId } from 'mongodb'
import { IUpdateUserRepository } from '../../../controllers/users/update/protocols'
import { MongoClient } from '../../../database/mongodb'
import { UpdateUserParamsType, UserType } from '../../../schemas/user'
import { MongoQueryDbRepository } from '../../query-db/mongodb'

export class MongoUpdateUserRepository implements IUpdateUserRepository {
  async updateUser(body: UpdateUserParamsType, params: { id: string }): Promise<UserType> {
    const canUpdateUser = await new MongoQueryDbRepository().canUpdateUser(body.name, body.email, params.id)

    if (canUpdateUser.wasFound || !canUpdateUser.selectedUser) throw canUpdateUser.message
    const defualtUser = canUpdateUser.selectedUser

    await MongoClient.db.collection<Omit<UserType, 'id'>>(process.env.MONGODB_COLLECTION ?? '').updateOne(
      { _id: new ObjectId(params.id) },
      {
        $set: {
          name: body.name ?? defualtUser.name,
          credentials: {
            email: body.email ?? defualtUser.credentials.email,
            password: body.password ? bcrypt.hashSync(body.password, 10) : defualtUser.credentials.password
          }
        }
      }
    )

    const user = await MongoClient.db
      .collection<Omit<UserType, 'id'>>(process.env.MONGODB_COLLECTION ?? '')
      .findOne({ _id: new ObjectId(params.id) })

    if (!user) throw 'Unable to find user'

    const { _id, ...rest } = user

    return { id: _id.toHexString(), ...rest }
  }
}
