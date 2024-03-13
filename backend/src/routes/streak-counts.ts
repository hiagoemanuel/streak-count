import express from 'express'
import { MongoGetStreakCountsRepository } from '../repositories/streak-counts/get/mongodb'
import { GetStreakCountsController } from '../controllers/streak-counts/get'
import { MongoCreateStreakCountRepository } from '../repositories/streak-counts/create/mongodb'
import { CreateStreakCountController } from '../controllers/streak-counts/create'

export const streakCounts = express.Router()

streakCounts.get('/', async (req, res) => {
  const getStreakCountsRepository = new MongoGetStreakCountsRepository()
  const getStrekCountsCrontroller = new GetStreakCountsController(getStreakCountsRepository)
  const response = await getStrekCountsCrontroller.handler()

  res.status(response.statusCode).send(response)
})

streakCounts.post('/', async (req, res) => {
  const createStreakCountRepository = new MongoCreateStreakCountRepository()
  const createStreakCountController = new CreateStreakCountController(createStreakCountRepository)
  const response = await createStreakCountController.handler(req)

  res.status(response.statusCode).send(response)
})