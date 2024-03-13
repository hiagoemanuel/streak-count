import { UserType } from '../../../schemas/user'
import { HttpRequest, HttpResponse, Params } from '../../protocols'

export interface IGetUserController {
  handler: () => Promise<HttpResponse<UserType[]>>
  handlerOneUser: (req: HttpRequest<Params<{ id: string }>>) => Promise<HttpResponse<UserType>>
}

export interface IGetUserRepository {
  getUsers: () => Promise<UserType[]>
  getOneUser: (id: string) => Promise<UserType>
}
