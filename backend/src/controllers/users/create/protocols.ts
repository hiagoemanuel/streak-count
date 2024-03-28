import { type CreateUserParamsType, type UserType } from '../../../schemas/user'
import { type Body, type HttpRequest, type HttpResponse } from '../../protocols'

export interface ICreateUserController {
  handler: (req: HttpRequest<Body<CreateUserParamsType>>) => Promise<HttpResponse<UserType>>
}

export interface ICreateUserRepository {
  createUser: (userParams: CreateUserParamsType) => Promise<ICreateUser>
}

export interface ICreateUser {
  user: UserType | null
  dbConsult: ICheckUserAlreadyExists
}

export interface ICheckUserAlreadyExists {
  userFound: boolean
  message: string
}
