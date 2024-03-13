import { UserType } from '../../../schemas/user'
import { internalServerError, notFound, ok } from '../../helpers'
import { HttpRequest, HttpResponse, Params } from '../../protocols'
import { IGetUserController, IGetUserRepository } from './protocols'

export class GetUsersController implements IGetUserController {
  constructor(private readonly getUserRepository: IGetUserRepository) {}

  async handler(): Promise<HttpResponse<UserType[]>> {
    try {
      const users = await this.getUserRepository.getUsers()
      return ok<UserType[]>(users, 'All users were received')
    } catch {
      return internalServerError<null>(null, 'Something went wrong')
    }
  }

  async handlerOneUser(req: HttpRequest<Params<{ id: string }>>): Promise<HttpResponse<UserType>> {
    try {
      const user = await this.getUserRepository.getOneUser(req.params.id)
      if (!user) return notFound<null>(null, 'User was not found')
      return ok<UserType>(user, 'User was found')
    } catch (err) {
      return internalServerError<null>(null, String(err))
    }
  }
}
