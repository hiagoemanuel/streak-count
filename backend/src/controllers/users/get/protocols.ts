import { UserType } from '../../../schemas/user'
import { HttpResponse } from '../../protocols'

export interface IGetUserController {
  handler: () => Promise<HttpResponse<UserType[] | null>>
  handlerOneUser: (userId: string) => Promise<HttpResponse<UserType | null>>
}

export interface IGetUserRepository {
  getUsers: () => Promise<UserType[]>
  getOneUser: (userId: string) => Promise<UserType>
}