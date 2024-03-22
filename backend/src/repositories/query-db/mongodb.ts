import { ObjectId } from 'mongodb'
import { MongoClient } from '../../database/mongodb'
import { UserType } from '../../schemas/user'
import { IMongoQueryDbRepository, IQueryDbResponse } from './protocols'
import { StreakCountType } from '../../schemas/streakCount'

export class MongoQueryDbRepository implements IMongoQueryDbRepository {
  async findNameOrEmail(name: string, email: string): Promise<IQueryDbResponse<UserType>> {
    const user = await MongoClient.collection.findOne(
      { $or: [{ 'credentials.email': email }, { name }] },
      { projection: ['name', 'credentials.email'] }
    )

    if (!user) return { wasFound: false, message: 'The user was not found' }

    const { _id, ...rest } = user
    const selectedUser = { id: _id.toHexString(), ...rest }

    if (user && user?.name === name && user.credentials.email === email) {
      return { wasFound: true, message: 'This name and email is already used', dbReturn: selectedUser }
    } else if ((user && user?.name === name) || user?.credentials.email === email) {
      return {
        wasFound: true,
        message: `This ${user.name === name ? 'name' : 'email'} is already used`,
        dbReturn: selectedUser
      }
    } else {
      return { wasFound: false, message: 'The user was not found' }
    }
  }

  async canUpdateUser(
    name: string | undefined,
    email: string | undefined,
    userId: string
  ): Promise<IQueryDbResponse<UserType>> {
    const findNameOrEmail = await this.findNameOrEmail(name ?? '', email ?? '')
    const user = await MongoClient.collection.findOne({ _id: new ObjectId(userId) })

    const nameOrEmailExists = findNameOrEmail.wasFound
    const userIdOfNameOrEmailExists = findNameOrEmail.dbReturn?.id

    if (!user) return { wasFound: false, message: findNameOrEmail.message }
    const { _id, ...rest } = user
    const selectedUser = { id: _id.toHexString(), ...rest }

    if (nameOrEmailExists && userIdOfNameOrEmailExists !== user?._id.toHexString()) {
      return { wasFound: true, message: findNameOrEmail.message }
    } else {
      return { wasFound: false, message: findNameOrEmail.message, dbReturn: selectedUser }
    }
  }

  async canUpdateStreakCount(name: string | undefined, id: string): Promise<IQueryDbResponse<StreakCountType>> {
    const user = await MongoClient.collection.findOne({ 'streakCounts.id': id })

    if (!user) return { wasFound: false, message: 'User not found' }

    const nameAlreadyUsesd = user.streakCounts.filter((sc) => sc.name === name)[0]
    const streakCountById = user.streakCounts.filter((sc) => sc.id === id)[0]

    if (nameAlreadyUsesd) {
      return { wasFound: true, message: 'This name is already used', dbReturn: nameAlreadyUsesd }
    } else {
      return { wasFound: false, message: 'The streak count can be update', dbReturn: streakCountById }
    }
  }
}
