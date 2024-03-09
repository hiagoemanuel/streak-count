import { UserType } from '../../schemas/user'
import { HttpResponse } from '../protocols'
import { IDeleteUserController, IDeleteUserRepository } from './protocols'

export class DeleteUserController implements IDeleteUserController {
  constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}

  async handler(userId: string): Promise<HttpResponse<UserType | string>> {
    try {
      const userDeleted = await this.deleteUserRepository.deleteUser(userId)

      return {
        statusCode: 200,
        body: userDeleted
      }
    } catch {
      return {
        statusCode: 500,
        body: 'Something went wrong'
      }
    }
  }
}
