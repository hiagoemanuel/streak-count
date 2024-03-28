import express from 'express'
import { MongoGetUsersRepository } from '../repositories/users/get/mongodb'
import { LoginController } from '../controllers/auth/login'
import { SignupController } from '../controllers/auth/signup'
import { MongoCreateUserRepository } from '../repositories/users/create/mongodb'

export const auth = express.Router()

auth.post('/login', async (req, res) => {
  const getUserRepository = new MongoGetUsersRepository()
  const loginController = new LoginController(getUserRepository)
  const { header, ...rest } = await loginController.handler({ body: req.body })

  res.status(rest.statusCode).header(header).send(rest)
})

auth.post('/signup', async (req, res) => {
  const createUserRepository = new MongoCreateUserRepository()
  const createUserController = new SignupController(createUserRepository)
  const { header, ...rest } = await createUserController.handler({ body: req.body })

  res.status(rest.statusCode).header(header).send(rest)
})
