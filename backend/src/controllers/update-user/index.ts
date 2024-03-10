import { UserType } from '../../schemas/user'
import { internalServerError, ok } from '../helpers'
import { HttpResponse } from '../protocols'
import { IUpdateUserController, IUpdateUserRepository } from './protocols'

export class UpdateUserController implements IUpdateUserController {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}

  async handler(userId: string): Promise<HttpResponse<UserType | null>> {
    try {
      const userUpdated = await this.updateUserRepository.updateUser(userId)

      return ok<UserType>(userUpdated, 'update-user')
    } catch (err) {
      return internalServerError<null>(null, String(err))
    }
  }
}
