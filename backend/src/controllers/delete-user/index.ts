import { UserType } from '../../schemas/user'
import { HttpResponse } from '../protocols'
import { IDeleteUserController, IDeleteUserRepository } from './protocols'

export class DeleteUserController implements IDeleteUserController {
  constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}

  async handler(userId: string): Promise<HttpResponse<UserType>> {
    try {
      const userDeleted = await this.deleteUserRepository.deleteUser(userId)

      return {
        body: userDeleted,
        massage: 'The user was deleted',
        statusCode: 200,
        statusText: 'OK'
      }
    } catch {
      return {
        body: null,
        massage: 'Something went wrong',
        statusCode: 500,
        statusText: 'Internal Server Error'
      }
    }
  }
}
