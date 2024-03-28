import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserSchema, type UserType } from '../../schemas/user'
import { badRequest, internalServerError, ok, unauthorized } from '../helpers'
import { type HttpRequest, type Body, type HttpResponse } from '../protocols'
import { type IGetUserRepository } from '../users/get/protocols'
import { type ILoginController, type LoginParams } from './protocols'

export class LoginController implements ILoginController {
  constructor(private readonly getUserRepository: IGetUserRepository) {}

  async handler(
    req: HttpRequest<Body<LoginParams>>,
  ): Promise<HttpResponse<UserType, { 'auth-token': string }>> {
    try {
      const validCredentials = UserSchema.shape.credentials.safeParse(req.body)

      if (!validCredentials.success) {
        const message = validCredentials.error.issues
          .map((issue) => `Field ${issue.path}: ${issue.message.toLowerCase()}`)
          .reduce((prev, curr) => `${prev} and ${curr}`)
        return badRequest<null>(null, message)
      }

      const user = await this.getUserRepository.getByEmail(req.body.email)
      if (!user) return unauthorized<null>(null, 'Incorrect email')

      const passwordValid = bcrypt.compareSync(req.body.password, user.credentials.password)
      if (!passwordValid) return unauthorized<null>(null, 'Incorrect password')

      const token = jwt.sign(user, process.env.JWT_KEY ?? '')

      return ok<UserType, { 'auth-token': string }>(user, 'Successfully logged in', {
        'auth-token': token,
      })
    } catch (err) {
      return internalServerError<null>(null, String(err))
    }
  }
}
