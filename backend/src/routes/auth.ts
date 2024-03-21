import express from 'express'

export const auth = express.Router()

auth.post('/login', (req, res) => {
  res.type('json').send('login')
})