import { User } from '../../models/user'
import { HttpRequest, HttpResponse } from '../protocols'
import {
  ICreateUserController,
  ICreateUserRepository,
  ICreateUserParams
} from './protocols'

export class CreateUserController implements ICreateUserController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handler(
    httpRequest: HttpRequest<ICreateUserParams>
  ): Promise<HttpResponse<User | string>> {
    try {
      const fiedsRequired: string[] = ['name', 'email', 'password']

      for (const field of fiedsRequired) {
        if (!httpRequest?.body?.[field as keyof ICreateUserParams]) {
          return {
            statusCode: 400,
            body: `the ${field} has required`
          }
        }
      }

      const userCreated = await this.createUserRepository.createUser(
        httpRequest.body
      )

      return {
        statusCode: 200,
        body: userCreated
      }
    } catch {
      return {
        statusCode: 500,
        body: 'something went wrong'
      }
    }
  }
}
