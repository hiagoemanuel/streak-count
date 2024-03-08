import { User } from '../../models/user'
import { HttpRequest, HttpResponse } from '../protocols'

export interface ICreateUserController {
  handler: (httpRequest: HttpRequest<ICreateUserParams>) => Promise<HttpResponse<User | string>>
}

export interface ICreateUserRepository {
  createUser: (userParams: ICreateUserParams) => Promise<User>
}

export interface ICreateUserParams {
  name: string
  email: string
  password: string
}