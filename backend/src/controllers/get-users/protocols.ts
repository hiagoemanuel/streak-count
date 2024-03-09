import { UserType } from '../../schemas/user'
import { HttpResponse } from '../protocols'

export interface IGetUserController {
  handler: () => Promise<HttpResponse<UserType[] | string>>
}

export interface IGetUserRepository {
  getUsers: () => Promise<UserType[]>
}
