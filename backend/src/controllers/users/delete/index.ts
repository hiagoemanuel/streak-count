import { UserType } from '../../../schemas/user'
import { internalServerError, ok } from '../../helpers'
import { HttpResponse } from '../../protocols'
import { IDeleteUserController, IDeleteUserRepository } from './protocols'

export class DeleteUserController implements IDeleteUserController {
  constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}

  async handler(userId: string): Promise<HttpResponse<UserType | null>> {
    try {
      const userDeleted = await this.deleteUserRepository.deleteUser(userId)

      return ok<UserType>(userDeleted, 'The user was deleted')
    } catch (err) {
      return internalServerError<null>(null, String(err))
    }
  }
}
