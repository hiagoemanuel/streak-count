import { UserType } from '../../../schemas/user'
import { HttpRequest, HttpResponse, Params } from '../../protocols'

export interface IDeleteUserController {
  handler: (req: HttpRequest<Params<{ id: string }>>) => Promise<HttpResponse<UserType>>
}

export interface IDeleteUserRepository {
  deleteUser: (params: { id: string }) => Promise<UserType>
}
