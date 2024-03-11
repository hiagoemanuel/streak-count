import express from 'express'
import { MongoGetUsersRepository } from '../repositories/get-users/mongo'
import { GetUsersController } from '../controllers/get-users'
import { MongoCreateUserRepository } from '../repositories/create-user/mongo'
import { CreateUserController } from '../controllers/create-user'
import { MongoDeleteUserRepository } from '../repositories/delete-user/mongodb'
import { DeleteUserController } from '../controllers/delete-user'
import { MongoUpdateUserRepository } from '../repositories/update-user/mongodb'
import { UpdateUserController } from '../controllers/update-user'

export const users = express.Router()

users.get('/', async (req, res) => {
  const getUserRepository = new MongoGetUsersRepository()
  const getUserController = new GetUsersController(getUserRepository)
  const response = await getUserController.handler()

  res.status(response.statusCode).send(response)
})

users.post('/', async (req, res) => {
  const createUserRepository = new MongoCreateUserRepository()
  const createUserController = new CreateUserController(createUserRepository)
  const response = await createUserController.handler(req)

  res.status(response.statusCode).send(response)
})

users.delete('/:id', async (req, res) => {
  const deleteUserRepository = new MongoDeleteUserRepository()
  const deleteUserController = new DeleteUserController(deleteUserRepository)
  const response = await deleteUserController.handler(req.params.id)

  res.status(response.statusCode).send(response)
})

users.put('/:id', async (req, res) => {
  const updateUserRepository = new MongoUpdateUserRepository()
  const updateUserController = new UpdateUserController(updateUserRepository)
  const response = await updateUserController.handler(req.params.id, req)

  res.status(response.statusCode).send(response)
})
