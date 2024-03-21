import express from 'express'
import { config } from 'dotenv'
import { MongoClient } from './database/mongodb'
import { users } from './routes/users'
import { streakCounts } from './routes/streak-counts'
import { auth } from './routes/auth'

const main = async () => {
  config()

  const app = express()
  const port = process.env.PORT || 8080

  await MongoClient.connect()

  app.use(express.json())
  app.use('/users', users)
  app.use('/streak-counts', streakCounts)
  app.use('/', auth)

  app.listen(port, () => {
    console.log('Server running on', port)
  })
}

main()
