import { Request, Response, NextFunction } from 'express'
import { unauthorized } from '../controllers/helpers'
import jwt from 'jsonwebtoken'

export const authentication = (req: Request, res: Response, next: NextFunction) => {
  const unauth = unauthorized<null>(null, 'Access denied')

  try {
    const authToken = req.headers['auth-token']
    if (!authToken) return res.status(unauth.statusCode).send(unauth)
    jwt.verify(authToken as string, process.env.JWT_KEY ?? '')
  } catch {
    return res.status(unauth.statusCode).send(unauth)
  }
  next()
}
