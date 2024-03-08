import { User } from '../../models/user'
import { HttpResponse } from '../protocols'

export interface IGetUserController {
  handler: () => Promise<HttpResponse<User[]>>
}

export interface IGetUserRepository {
  getUsers: () => Promise<User[]>
}
