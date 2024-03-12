import { UpdateUseParamsType, UserType } from '../../../schemas/user'
import { HttpRequest, HttpResponse } from '../../protocols'

export interface IUpdateUserController {
  handler: (userId: string, HttpRequest: HttpRequest<UpdateUseParamsType>) => Promise<HttpResponse<UserType | null>>
}

export interface IUpdateUserRepository {
  updateUser: (userId: string, userParams: UpdateUseParamsType) => Promise<UserType>
  nameOrEmailAlreadyUsed: (userId: string, userParams: UpdateUseParamsType) => Promise<INameOrEmailAlreadyUsed>
}


export interface INameOrEmailAlreadyUsed {
  nameOrEmailfound: boolean
  message: string
  userSelected?: UserType
}
