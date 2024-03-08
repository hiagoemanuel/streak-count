import { User } from '../../models/user'
import { HttpResponse } from '../protocols'

export interface IGetUserController {
  handler: () => Promise<HttpResponse<User[] | string>> 
}

export interface IGetUserRepository {
  getUsers: () => Promise<User[]>
}
