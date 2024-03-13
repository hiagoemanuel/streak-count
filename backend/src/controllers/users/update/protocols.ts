import { UpdateUserParamsType, UserType } from '../../../schemas/user'
import { Body, HttpRequest, HttpResponse, Params } from '../../protocols'

export interface IUpdateUserController {
  handler: (req: HttpRequest<Body<UpdateUserParamsType> & Params<{ id: string }>>) => Promise<HttpResponse<UserType>>
}

export interface IUpdateUserRepository {
  updateUser: (body: UpdateUserParamsType, params: { id: string }) => Promise<UserType>
}
