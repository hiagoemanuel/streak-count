import { decode } from 'jsonwebtoken'
import { type UserType } from '../../../schemas/user'
import { badRequest, internalServerError, notFound, ok } from '../../helpers'
import { type HttpRequest, type HttpResponse, type Params } from '../../protocols'
import { type IGetUserController, type IGetUserRepository } from './protocols'

export class GetUsersController implements IGetUserController {
  constructor(private readonly getUserRepository: IGetUserRepository) {}

  async handler(): Promise<HttpResponse<UserType[]>> {
    try {
      const users = await this.getUserRepository.getUsers()
      return ok<UserType[]>(users, 'All users were received')
    } catch (err) {
      return internalServerError<null>(null, String(err))
    }
  }

  async handlerOneUser(
    req: HttpRequest<Params<{ token: string }>>,
  ): Promise<HttpResponse<UserType>> {
    try {
      const userByToken = decode(req.params.token) as UserType | null
      if (!userByToken) return badRequest<null>(null, 'This token is invalid')
      const user = await this.getUserRepository.getOneUser(userByToken.id)
      if (!user) return notFound<null>(null, 'User was not found')
      return ok<UserType>(user, 'User was found')
    } catch (err) {
      return internalServerError<null>(null, String(err))
    }
  }
}
