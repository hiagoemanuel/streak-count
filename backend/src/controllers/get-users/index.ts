import { UserType } from '../../schemas/user'
import { HttpResponse } from '../protocols'
import { IGetUserController, IGetUserRepository } from './protocols'

export class GetUsersController implements IGetUserController {
  constructor(private readonly getUserRepository: IGetUserRepository) {}

  async handler(): Promise<HttpResponse<UserType[]>> {
    try {
      const users = await this.getUserRepository.getUsers()

      return {
        body: users,
        massage: 'All users were received',
        statusCode: 200,
        statusText: 'OK',
      }
    } catch {
      return {
        body: null,
        massage: 'Something went wrong',
        statusCode: 500,
        statusText: 'Internal Server Error',
      }
    }
  }
}
