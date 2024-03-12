import bcrypt from 'bcrypt'
import { ObjectId } from 'mongodb'
import { IUpdateUserRepository } from '../../../controllers/users/update/protocols'
import { MongoClient } from '../../../database/mongodb'
import { UpdateUseParamsType, UserType } from '../../../schemas/user'
import { MongoQueryDbRepository } from '../../query-db/mongodb'

export class MongoUpdateUserRepository implements IUpdateUserRepository {
  async updateUser(userId: string, userParams: UpdateUseParamsType): Promise<UserType> {
    const canUpdateUser = await new MongoQueryDbRepository().canUpdateUser(userParams.name, userParams.email, userId)

    if (canUpdateUser.wasFound || !canUpdateUser.selectedUser) throw canUpdateUser.message
    const defualtUser = canUpdateUser.selectedUser

    await MongoClient.db.collection<Omit<UserType, 'id'>>('users').updateOne(
      { _id: new ObjectId(userId) },
      {
        $set: {
          name: userParams.name ?? defualtUser.name,
          credentials: {
            email: userParams.email ?? defualtUser.credentials.email,
            password: bcrypt.hashSync(userParams.password ?? defualtUser.credentials.password, 10)
          }
        }
      }
    )

    const user = await MongoClient.db.collection<Omit<UserType, 'id'>>('users').findOne({ _id: new ObjectId(userId) })

    if (!user) throw 'Unable to find user'

    const { _id, ...rest } = user

    return { id: _id.toHexString(), ...rest }
  }
}
