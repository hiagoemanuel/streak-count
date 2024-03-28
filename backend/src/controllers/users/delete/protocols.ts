import { type UserType } from '../../../schemas/user'
import { type HttpRequest, type HttpResponse, type Params } from '../../protocols'

export interface IDeleteUserController {
  handler: (req: HttpRequest<Params<{ id: string }>>) => Promise<HttpResponse<UserType>>
}

export interface IDeleteUserRepository {
  deleteUser: (params: { id: string }) => Promise<UserType>
}
