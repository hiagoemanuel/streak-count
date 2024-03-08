import express from 'express'
import { config } from 'dotenv'
import { MongoClient } from './database/mongodb'
import { MongoGetUsersRepository } from './repositories/get-users/mongo'
import { GetUsersController } from './controllers/get-users'

const main = async () => {
  config()

  const app = express()
  const port = process.env.PORT || 8080

  await MongoClient.connect()

  app.get('/users', async (req, res) => {
    const userRepository = new MongoGetUsersRepository()
    const getUserController = new GetUsersController(userRepository)
    const { statusCode, body } = await getUserController.handler()

    res.status(statusCode).send(body)
  })

  app.listen(port, () => {
    console.log('Server running on', port)
  })
}

main()
