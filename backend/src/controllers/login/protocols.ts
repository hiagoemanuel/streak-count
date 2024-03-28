import { type UserType } from '../../schemas/user'
import { type Body, type HttpRequest, type HttpResponse } from '../protocols'

export interface ILoginController {
  handler: (
    req: HttpRequest<Body<LoginParams>>,
  ) => Promise<HttpResponse<UserType, { 'auth-token': string }>>
}

export interface LoginParams {
  email: string
  password: string
}
