import { UserType } from '../../../schemas/user'
import { internalServerError, notFound, ok } from '../../helpers'
import { HttpResponse } from '../../protocols'
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

  async handlerOneUser(userId: string): Promise<HttpResponse<UserType | null>> {
    try {
      const user = await this.getUserRepository.getOneUser(userId)
      if (!user) return notFound<null>(null, 'User was not found')
      return ok<UserType>(user, 'User was found')
    } catch (err) {
      return internalServerError<null>(null, String(err))
    }
  }
}
