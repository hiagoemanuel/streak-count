import { MongoClient as Mongo, type Db, Collection } from 'mongodb'
import { UserType } from '../../schemas/user'

export const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,
  collection: undefined as unknown as Collection<Omit<UserType, 'id'>>,
  async connect(): Promise<void> {
    const URI = process.env.MONGODB_URI

    const client = new Mongo(URI ?? '', {
      auth: {
        username: process.env.MONGODB_USERNAME,
        password: process.env.MONGODB_PASSWORD
      }
    })

    this.client = client
    this.db = client.db('streak-count')
    this.collection = this.db.collection<Omit<UserType, 'id'>>(process.env.MONGODB_COLLECTION ?? '')
  }
}
