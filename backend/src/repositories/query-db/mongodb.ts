import { ObjectId } from 'mongodb'
import { MongoClient } from '../../database/mongodb'
import { UserType } from '../../schemas/user'
import { IMongoQueryDbRepository, IQueryDbResponse } from './protocols'

export class MongoQueryDbRepository implements IMongoQueryDbRepository {
  async findNameOrEmail(name: string, email: string): Promise<IQueryDbResponse> {
    const user = await MongoClient.db
      .collection<Omit<UserType, 'id'>>('users')
      .findOne({ $or: [{ 'credentials.email': email }, { name }] }, { projection: ['name', 'credentials.email'] })

    if (!user) return { wasFound: false, message: 'The user was not found' }

    const { _id, ...rest } = user
    const selectedUser = { id: _id.toHexString(), ...rest }

    if (user && user?.name === name && user.credentials.email === email) {
      return { wasFound: true, message: 'This name and email is already used', selectedUser }
    } else if ((user && user?.name === name) || user?.credentials.email === email) {
      return { wasFound: true, message: `This ${user.name === name ? 'name' : 'email'} is already used`, selectedUser }
    } else {
      return { wasFound: false, message: 'The user was not found' }
    }
  }

  async canUpdateUser(name: string | undefined, email: string | undefined, userId: string): Promise<IQueryDbResponse> {
    const findNameOrEmail = await this.findNameOrEmail(name ?? '', email ?? '')
    const user = await MongoClient.db.collection<Omit<UserType, 'id'>>('users').findOne({ _id: new ObjectId(userId) })

    const nameOrEmailExists = findNameOrEmail.wasFound
    const userIdOfNameOrEmailExists = findNameOrEmail.selectedUser?.id

    if (!user) return { wasFound: false, message: findNameOrEmail.message }
    const { _id, ...rest } = user
    const selectedUser = { id: _id.toHexString(), ...rest }

    if (nameOrEmailExists && userIdOfNameOrEmailExists !== user?._id.toHexString()) {
      return { wasFound: true, message: findNameOrEmail.message }
    } else {
      return { wasFound: false, message: findNameOrEmail.message, selectedUser }
    }
  }
}
