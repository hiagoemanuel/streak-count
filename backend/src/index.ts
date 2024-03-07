import express from 'express'
import { config } from 'dotenv'
import { MongoClient } from './database/mongodb'

const main = async () => {
  config()

  const app = express()
  const port = process.env.PORT || 8080

  await MongoClient.connect()

  app.get('/users', async (req, res) => {
    const users = await MongoClient.db.collection('users').find({}).toArray()
    res.send(users)
  })

  app.listen(port, () => {
    console.log('Server running on', port)
  })
}

main()
