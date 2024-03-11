import { UpdateUseParamsType, UpdateUserParams, UserType } from '../../../schemas/user'
import { badRequest, internalServerError, ok } from '../../helpers'
import { HttpRequest, HttpResponse } from '../../protocols'
import { IUpdateUserController, IUpdateUserRepository } from './protocols'

export class UpdateUserController implements IUpdateUserController {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}

  async handler(userId: string, HttpRequest: HttpRequest<UpdateUseParamsType>): Promise<HttpResponse<UserType | null>> {
    try {
      const allowedFields = UpdateUserParams.safeParse(HttpRequest.body)

      if (!allowedFields.success) {
        const message = allowedFields.error.issues
          .map((issue) => `Field ${issue.path}: ${issue.message.toLowerCase()}`)
          .reduce((prev, curr) => `${prev} and ${curr}`)
        return badRequest<null>(null, message)
      }

      const userUpdated = await this.updateUserRepository.updateUser(userId, HttpRequest.body)

      return ok<UserType>(userUpdated, 'User updated')
    } catch (err) {
      return internalServerError<null>(null, String(err))
    }
  }
}
