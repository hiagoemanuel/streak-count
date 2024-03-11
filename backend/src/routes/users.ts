import express from 'express'
import { MongoGetUsersRepository } from '../repositories/users/get/mongodb'
import { GetUsersController } from '../controllers/users/get'
import { MongoCreateUserRepository } from '../repositories/users/create/mongodb'
import { CreateUserController } from '../controllers/users/create'
import { MongoDeleteUserRepository } from '../repositories/users/delete/mongodb'
import { DeleteUserController } from '../controllers/users/delete'
import { MongoUpdateUserRepository } from '../repositories/users/update/mongodb'
import { UpdateUserController } from '../controllers/users/update'

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
