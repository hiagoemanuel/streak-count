import express from 'express'
import { MongoGetStreakCountsRepository } from '../repositories/streak-counts/get/mongodb'
import { GetStreakCountsController } from '../controllers/streak-counts/get'

export const streakCounts = express.Router()

streakCounts.get('/', async (req, res) => {
  const getStreakCountsRepository = new MongoGetStreakCountsRepository()
  const getStrekCountsCrontroller = new GetStreakCountsController(getStreakCountsRepository)
  const response = await getStrekCountsCrontroller.handler()

  res.status(response.statusCode).send(response)
})
