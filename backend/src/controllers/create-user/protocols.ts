import { CreateUserParamsType, UserType } from '../../schemas/user'
import { HttpRequest, HttpResponse } from '../protocols'

export interface ICreateUserController {
  handler: (httpRequest: HttpRequest<CreateUserParamsType>) => Promise<HttpResponse<UserType>>
}

export interface ICreateUserRepository {
  createUser: (userParams: CreateUserParamsType) => Promise<UserType>
}
