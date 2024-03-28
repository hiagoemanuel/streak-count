import express from 'express'
import cors, { type CorsOptions } from 'cors'
import { config } from 'dotenv'
import { MongoClient } from './database/mongodb'
import { users } from './routes/users'
import { streakCounts } from './routes/streak-counts'
import { auth } from './routes/auth'
import { authentication } from './middlewares/authentication'

const app = express()

const main = async () => {
  config()

  const port = process.env.PORT ?? 8080

  await MongoClient.connect()

  const corsOptions: CorsOptions = {
    origin: process.env.DEV_ENV === 'true' ? '*' : 'https://streak-count.vercel.app/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    exposedHeaders: '*',
  }

  app.use(cors(corsOptions))
  app.use(express.json())

  app.use('/', auth)
  app.use(authentication)
  app.use('/users', users)
  app.use('/streak-counts', streakCounts)

  app.listen(port, () => {
    console.log('Server running on', port)
  })
}

main()

export default app
