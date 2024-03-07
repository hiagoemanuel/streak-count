import { MongoClient as Mongo, type Db } from 'mongodb'

export const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,
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

    console.log('mongodb connected')
  }
}
