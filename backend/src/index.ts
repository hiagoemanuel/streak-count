import express from 'express'
import { config } from 'dotenv'
import { MongoClient } from './database/mongodb'
import { MongoGetUsersRepository } from './repositories/get-users/mongo'
import { GetUsersController } from './controllers/get-users'
import { MongoCreateUserRepository } from './repositories/create-user/mongo'
import { CreateUserController } from './controllers/create-user'
import { MongoDeleteUserRepository } from './repositories/delete-user/mongodb'
import { DeleteUserController } from './controllers/delete-user'
import { UpdateUserController } from './controllers/update-user'
import { MongoUpdateUserRepository } from './repositories/update-user/mongodb'

const main = async () => {
  config()

  const app = express()
  const port = process.env.PORT || 8080

  await MongoClient.connect()
  app.use(express.json())

  app.get('/users', async (req, res) => {
    const getUserRepository = new MongoGetUsersRepository()
    const getUserController = new GetUsersController(getUserRepository)
    const response = await getUserController.handler()

    res.status(response.statusCode).send(response)
  })

  app.post('/users', async (req, res) => {
    const createUserRepository = new MongoCreateUserRepository()
    const createUserController = new CreateUserController(createUserRepository)
    const response = await createUserController.handler(req)

    res.status(response.statusCode).send(response)
  })

  app.delete('/users/:id', async (req, res) => {
    const deleteUserRepository = new MongoDeleteUserRepository()
    const deleteUserController = new DeleteUserController(deleteUserRepository)
    const response = await deleteUserController.handler(req.params.id)

    res.status(response.statusCode).send(response)
  })

  app.put('/users/:id', async (req, res) => {
    const updateUserRepository = new MongoUpdateUserRepository()
    const updateUserController = new UpdateUserController(updateUserRepository)
    const response = await updateUserController.handler(req.params.id, req)

    res.status(response.statusCode).send(response)
  })

  app.listen(port, () => {
    console.log('Server running on', port)
  })
}

main()
