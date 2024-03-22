import bcrypt from 'bcrypt'
import { ObjectId } from 'mongodb'
import { IUpdateUserRepository } from '../../../controllers/users/update/protocols'
import { MongoClient } from '../../../database/mongodb'
import { UpdateUserParamsType, UserType } from '../../../schemas/user'
import { MongoQueryDbRepository } from '../../query-db/mongodb'

export class MongoUpdateUserRepository implements IUpdateUserRepository {
  async updateUser(body: UpdateUserParamsType, params: { id: string }): Promise<UserType> {
    const canUpdateUser = await new MongoQueryDbRepository().canUpdateUser(body.name, body.email, params.id)

    if (canUpdateUser.wasFound || !canUpdateUser.dbReturn) throw canUpdateUser.message
    const defualtUser = canUpdateUser.dbReturn

    await MongoClient.collection.updateOne(
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

    const user = await MongoClient.collection.findOne({ _id: new ObjectId(params.id) })

    if (!user) throw 'Unable to find user'

    const { _id, ...rest } = user

    return { id: _id.toHexString(), ...rest }
  }
}
