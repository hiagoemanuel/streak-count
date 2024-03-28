import { type UserType } from '../../../schemas/user'
import { type HttpRequest, type HttpResponse, type Params } from '../../protocols'

export interface IGetUserController {
  handler: () => Promise<HttpResponse<UserType[]>>
  handlerOneUser: (req: HttpRequest<Params<{ token: string }>>) => Promise<HttpResponse<UserType>>
}

export interface IGetUserRepository {
  getUsers: () => Promise<UserType[]>
  getOneUser: (id: string) => Promise<UserType>
  getByEmail: (email: string) => Promise<UserType | null>
}
