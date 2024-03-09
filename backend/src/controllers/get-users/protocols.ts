import { UserType } from '../../schemas/user'
import { HttpResponse } from '../protocols'

export interface IGetUserController {
  handler: () => Promise<HttpResponse<UserType[]>>
}

export interface IGetUserRepository {
  getUsers: () => Promise<UserType[]>
}
