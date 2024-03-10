import { CreateUserParamsType, UserType } from '../../schemas/user'
import { HttpRequest, HttpResponse } from '../protocols'

export interface ICreateUserController {
  handler: (httpRequest: HttpRequest<CreateUserParamsType>) => Promise<HttpResponse<UserType>>
}

export interface ICreateUserRepository {
  createUser: (userParams: CreateUserParamsType) => Promise<ICreateUser>
  checkUserAlreadyExists: (userParams: CreateUserParamsType) => Promise<ICheckUserAlreadyExists>
}

export interface ICreateUser {
  user: UserType | null
  dbConsult: ICheckUserAlreadyExists
}

export interface ICheckUserAlreadyExists {
  userFound: boolean
  message: string
}