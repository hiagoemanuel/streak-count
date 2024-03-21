import express from 'express'
import { MongoGetUsersRepository } from '../repositories/users/get/mongodb'
import { LoginController } from '../controllers/login'

export const auth = express.Router()

auth.post('/login', async (req, res) => {
  const getUserRepository = new MongoGetUsersRepository()
  const loginController = new LoginController(getUserRepository)
  const response = await loginController.handler({ body: req.body })

  res.status(response.statusCode).send(response)
})
