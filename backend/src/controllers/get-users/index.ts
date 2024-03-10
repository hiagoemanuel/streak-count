import { UserType } from '../../schemas/user'
import { internalServerError, ok } from '../helpers'
import { HttpResponse } from '../protocols'
import { IGetUserController, IGetUserRepository } from './protocols'

export class GetUsersController implements IGetUserController {
  constructor(private readonly getUserRepository: IGetUserRepository) {}

  async handler(): Promise<HttpResponse<UserType[] | null>> {
    try {
      const users = await this.getUserRepository.getUsers()
      return ok<UserType[]>(users, 'All users were received')
    } catch {
      return internalServerError<null>(null, 'Something went wrong')
    }
  }
}
