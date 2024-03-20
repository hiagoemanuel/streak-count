import express from 'express'
import { MongoGetStreakCountsRepository } from '../repositories/streak-counts/get/mongodb'
import { GetStreakCountsController } from '../controllers/streak-counts/get'
import { MongoCreateStreakCountRepository } from '../repositories/streak-counts/create/mongodb'
import { CreateStreakCountController } from '../controllers/streak-counts/create'
import { MongoDeleteStreakCount } from '../repositories/streak-counts/delete/mongodb'
import { DeleteStreakCountController } from '../controllers/streak-counts/delete'
import { MongoUpadateStreakCountRepository } from '../repositories/streak-counts/update/mongodb'
import { UpdateStreakCountController } from '../controllers/streak-counts/update'

export const streakCounts = express.Router()

streakCounts.get('/', async (req, res) => {
  const getStreakCountsRepository = new MongoGetStreakCountsRepository()
  const getStrekCountsCrontroller = new GetStreakCountsController(getStreakCountsRepository)
  const response = await getStrekCountsCrontroller.handler()

  res.status(response.statusCode).send(response)
})

streakCounts.get('/:id', async (req, res) => {
  const getStreakCountsRepository = new MongoGetStreakCountsRepository()
  const getStrekCountsCrontroller = new GetStreakCountsController(getStreakCountsRepository)
  const response = await getStrekCountsCrontroller.handlerOneStreakCount({ params: req.params })

  res.status(response.statusCode).send(response)
})

streakCounts.post('/', async (req, res) => {
  const createStreakCountRepository = new MongoCreateStreakCountRepository()
  const createStreakCountController = new CreateStreakCountController(createStreakCountRepository)
  const response = await createStreakCountController.handler({ body: req.body })

  res.status(response.statusCode).send(response)
})

streakCounts.delete('/:id', async (req, res) => {
  const deleteStreakCountRepository = new MongoDeleteStreakCount()
  const deleteStreakCountController = new DeleteStreakCountController(deleteStreakCountRepository)
  const response = await deleteStreakCountController.handler({ params: req.params })

  res.status(response.statusCode).send(response)
})

streakCounts.put('/:id', async (req, res) => {
  const updateStreakCountRepository = new MongoUpadateStreakCountRepository()
  const updateStreakCountController = new UpdateStreakCountController(updateStreakCountRepository)
  const response = await updateStreakCountController.handler({ body: req.body, params: req.params })

  res.status(response.statusCode).send(response)
})
