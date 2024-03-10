import { CreateUserParams, CreateUserParamsType, UserType } from '../../schemas/user'
import { badRequest, created, internalServerError } from '../helpers'
import { HttpRequest, HttpResponse } from '../protocols'
import { ICreateUserController, ICreateUserRepository } from './protocols'

export class CreateUserController implements ICreateUserController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handler(httpRequest: HttpRequest<CreateUserParamsType>): Promise<HttpResponse<UserType | null>> {
    try {
      const fieldsRequired = CreateUserParams.safeParse(httpRequest.body)

      if (!fieldsRequired.success) {
        const message = fieldsRequired.error.issues
          .map((issue) => `Field ${issue.path}: ${issue.message.toLowerCase()}`)
          .reduce((prev, curr) => `${prev} and ${curr}`)
        return badRequest<null>(null, message)
      }

      const userCreated = await this.createUserRepository.createUser(httpRequest.body)

      if (userCreated.dbConsult.userFound) return badRequest<null>(null, userCreated.dbConsult.message)
      if (!userCreated.user) return internalServerError<null>(null, 'Unable to create user, try again')
      return created<UserType>(userCreated.user, 'The user was created')
    } catch {
      return internalServerError<null>(null, 'Something went wrong on the server side')
    }
  }
}
