import { CreateUserParams, CreateUserParamsType, UserType } from '../../schemas/user'
import { HttpRequest, HttpResponse } from '../protocols'
import { ICreateUserController, ICreateUserRepository } from './protocols'

export class CreateUserController implements ICreateUserController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handler(httpRequest: HttpRequest<CreateUserParamsType>): Promise<HttpResponse<UserType>> {
    try {
      const fieldsRequired = CreateUserParams.safeParse(httpRequest.body)

      if (!fieldsRequired.success) {
        const message = fieldsRequired.error.issues
          .map((issue) => `Field ${issue.path}: ${issue.message}`)
          .reduce((prev, curr) => `${prev} and ${curr}`)

        return {
          body: null,
          massage: message,
          statusCode: 400,
          statusText: 'Bad Request'
        }
      }

      const userCreated = await this.createUserRepository.createUser(httpRequest.body)

      if (userCreated.dbConsult.userFound) {
        return {
          body: null,
          massage: userCreated.dbConsult.message,
          statusCode: 400,
          statusText: 'Bad Request'
        }
      }

      return {
        body: userCreated.user,
        massage: 'The user was created',
        statusCode: 201,
        statusText: 'Created'
      }
    } catch {
      return {
        body: null,
        massage: 'Something went wrong on the server side',
        statusCode: 500,
        statusText: 'Internal Server Error'
      }
    }
  }
}
