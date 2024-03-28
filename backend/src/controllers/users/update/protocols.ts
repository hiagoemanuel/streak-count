import { type UpdateUserParamsType, type UserType } from '../../../schemas/user'
import { type Body, type HttpRequest, type HttpResponse, type Params } from '../../protocols'

export interface IUpdateUserController {
  handler: (
    req: HttpRequest<Body<UpdateUserParamsType> & Params<{ id: string }>>,
  ) => Promise<HttpResponse<UserType>>
}

export interface IUpdateUserRepository {
  updateUser: (body: UpdateUserParamsType, params: { id: string }) => Promise<UserType>
}
