import express from 'express'

export const streakCounts = express.Router()

streakCounts.get('/', (req, res) => {
  res.send('streak-counts')
})
