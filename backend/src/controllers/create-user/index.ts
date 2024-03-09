import {
  CreateUserParams,
  CreateUserParamsType,
  UserType
} from '../../schemas/user'
import { HttpRequest, HttpResponse } from '../protocols'
import { ICreateUserController, ICreateUserRepository } from './protocols'

export class CreateUserController implements ICreateUserController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handler(
    httpRequest: HttpRequest<CreateUserParamsType>
  ): Promise<HttpResponse<UserType | string>> {
    try {
      const fieldsRequired = CreateUserParams.safeParse(httpRequest.body)

      if (!fieldsRequired.success) {
        return {
          statusCode: 400,
          body: fieldsRequired.error.message
        }
      }

      const userCreated = await this.createUserRepository.createUser(
        httpRequest.body
      )

      return {
        statusCode: 200,
        body: userCreated
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: `${err || 'Something went wrong'}`
      }
    }
  }
}
