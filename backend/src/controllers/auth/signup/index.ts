import { sign } from 'jsonwebtoken'
import { CreateUserParams, type CreateUserParamsType, type UserType } from '../../../schemas/user'
import { badRequest, created, internalServerError } from '../../helpers'
import { type Body, type HttpRequest, type HttpResponse } from '../../protocols'
import { type ISignupController, type ICreateUserRepository } from './protocols'

export class SignupController implements ISignupController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handler(
    req: HttpRequest<Body<CreateUserParamsType>>,
  ): Promise<HttpResponse<UserType, { 'auth-token': string }>> {
    try {
      const fieldsRequired = CreateUserParams.safeParse(req.body)

      if (!fieldsRequired.success) {
        const message = fieldsRequired.error.issues
          .map((issue) => `Field ${issue.path}: ${issue.message.toLowerCase()}`)
          .reduce((prev, curr) => `${prev} and ${curr}`)
        return badRequest<null>(null, message)
      }

      const userCreated = await this.createUserRepository.createUser(req.body)

      if (userCreated.dbConsult.userFound)
        return badRequest<null>(null, userCreated.dbConsult.message)
      if (!userCreated.user)
        return internalServerError<null>(null, 'Unable to create user, try again')

      const token = sign(userCreated.user, process.env.JWT_KEY ?? '')

      return created<UserType, { 'auth-token': string }>(userCreated.user, 'The user was created', {
        'auth-token': token,
      })
    } catch (err) {
      return internalServerError<null>(null, String(err))
    }
  }
}
