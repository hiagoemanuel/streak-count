import { type UserType } from '../../../schemas/user'
import { internalServerError, ok } from '../../helpers'
import { type HttpRequest, type HttpResponse, type Params } from '../../protocols'
import { type IDeleteUserController, type IDeleteUserRepository } from './protocols'

export class DeleteUserController implements IDeleteUserController {
  constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}

  async handler(req: HttpRequest<Params<{ id: string }>>): Promise<HttpResponse<UserType>> {
    try {
      const userDeleted = await this.deleteUserRepository.deleteUser(req.params)

      return ok<UserType>(userDeleted, 'The user was deleted')
    } catch (err) {
      return internalServerError<null>(null, String(err))
    }
  }
}
