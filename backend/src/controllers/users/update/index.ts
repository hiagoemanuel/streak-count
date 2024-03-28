import { UpdateUserParams, type UpdateUserParamsType, type UserType } from '../../../schemas/user'
import { badRequest, internalServerError, ok } from '../../helpers'
import { type Body, type HttpRequest, type HttpResponse, type Params } from '../../protocols'
import { type IUpdateUserController, type IUpdateUserRepository } from './protocols'

export class UpdateUserController implements IUpdateUserController {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}

  async handler(
    req: HttpRequest<Body<UpdateUserParamsType> & Params<{ id: string }>>,
  ): Promise<HttpResponse<UserType>> {
    try {
      const allowedFields = UpdateUserParams.safeParse(req.body)

      if (!allowedFields.success) {
        const message = allowedFields.error.issues
          .map((issue) => `Field ${issue.path}: ${issue.message.toLowerCase()}`)
          .reduce((prev, curr) => `${prev} and ${curr}`)
        return badRequest<null>(null, message)
      }

      const userUpdated = await this.updateUserRepository.updateUser(req.body, req.params)

      return ok<UserType>(userUpdated, 'User updated')
    } catch (err) {
      return internalServerError<null>(null, String(err))
    }
  }
}
