import express from 'express'
import { config } from 'dotenv'
import { MongoClient } from './database/mongodb'
import { MongoGetUsersRepository } from './repositories/get-users/mongo'
import { GetUsersController } from './controllers/get-users'
import { MongoCreateUserRepository } from './repositories/create-user/mongo'
import { CreateUserController } from './controllers/create-user'
import { MongoDeleteUserRepository } from './repositories/delete-user/mongodb'
import { DeleteUserController } from './controllers/delete-user'

const main = async () => {
  config()

  const app = express()
  const port = process.env.PORT || 8080

  await MongoClient.connect()
  app.use(express.json())

  app.get('/users', async (req, res) => {
    const getUserRepository = new MongoGetUsersRepository()
    const getUserController = new GetUsersController(getUserRepository)
    const { statusCode, body } = await getUserController.handler()

    res.status(statusCode).send(body)
  })

  app.post('/users', async (req, res) => {
    const createUserRepository = new MongoCreateUserRepository()
    const createUserController = new CreateUserController(createUserRepository)
    const { statusCode, body } = await createUserController.handler(req)

    res.status(statusCode).send(body)
  })

  app.delete('/users/:id', async (req, res) => {
    const deleteUserRepository = new MongoDeleteUserRepository()
    const deleteUserController = new DeleteUserController(deleteUserRepository)
    const {statusCode, body} = await deleteUserController.handler(req.params.id)

    res.status(statusCode).send(body)
  })

  app.listen(port, () => {
    console.log('Server running on', port)
  })
}

main()
