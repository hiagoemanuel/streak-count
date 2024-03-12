import bcrypt from 'bcrypt'
import { ObjectId } from 'mongodb'
import { INameOrEmailAlreadyUsed, IUpdateUserRepository } from '../../../controllers/users/update/protocols'
import { MongoClient } from '../../../database/mongodb'
import { UpdateUseParamsType, UserType } from '../../../schemas/user'

export class MongoUpdateUserRepository implements IUpdateUserRepository {
  async updateUser(userId: string, userParams: UpdateUseParamsType): Promise<UserType> {
    const nameOrEmailFound = await this.nameOrEmailAlreadyUsed(userId, userParams)

    console.log(nameOrEmailFound)

    if (nameOrEmailFound.nameOrEmailfound) throw nameOrEmailFound.message
    if (!nameOrEmailFound.userSelected) throw 'user was not found'

    const userSelected = nameOrEmailFound.userSelected

    await MongoClient.db.collection<Omit<UserType, 'id'>>('users').updateOne(
      { _id: new ObjectId(userId) },
      {
        $set: {
          name: userParams.name ?? userSelected.name,
          credentials: {
            email: userParams.email ?? userSelected.credentials.email,
            password: bcrypt.hashSync(userParams.password ?? userSelected.credentials.password, 10)
          }
        }
      }
    )

    const user = await MongoClient.db.collection<Omit<UserType, 'id'>>('users').findOne({ _id: new ObjectId(userId) })

    if (!user) throw 'Unable to find user'

    const { _id, ...rest } = user

    return { id: _id.toHexString(), ...rest }
  }

  async nameOrEmailAlreadyUsed(userId: string, userParams: UpdateUseParamsType): Promise<INameOrEmailAlreadyUsed> {
    const userSelected = await MongoClient.db
      .collection<Omit<UserType, 'id'>>('users')
      .findOne({ _id: new ObjectId(userId) }, { projection: ['name', 'credentials.email', 'credentials.password'] })

    if (!userSelected) throw 'Use was not found'

    const nameOrEmailFound = await MongoClient.db
      .collection<Omit<UserType, 'id'>>('users')
      .findOne(
        { $or: [{ 'credentials.email': userParams.email }, { name: userParams.name }] },
        { projection: ['name', 'credentials.email'] }
      )

    if (nameOrEmailFound && nameOrEmailFound?._id.toHexString() !== userSelected?._id.toHexString()) {
      return { nameOrEmailfound: true, message: 'Name or email already used' }
    } else {
      const { _id, ...rest } = userSelected

      return {
        nameOrEmailfound: false,
        message: 'Name or email can be used',
        userSelected: { id: _id.toHexString(), ...rest }
      }
    }
  }
}
