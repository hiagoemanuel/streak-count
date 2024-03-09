import { UserType } from '../../schemas/user'
import { HttpResponse } from '../protocols'
import { IGetUserController, IGetUserRepository } from './protocols'

export class GetUsersController implements IGetUserController {
  constructor(private readonly getUserRepository: IGetUserRepository) {}

  async handler(): Promise<HttpResponse<UserType[] | string>> {
    try {
      const users = await this.getUserRepository.getUsers()

      return {
        statusCode: 200,
        body: users
      }
    } catch {
      return {
        statusCode: 500,
        body: 'something went wrong'
      }
    }
  }
}
