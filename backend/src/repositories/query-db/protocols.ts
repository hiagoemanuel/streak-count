import { UserType } from "../../schemas/user"

export interface IMongoQueryDbRepository {
  findNameOrEmail: (name: string, email: string) => Promise<IQueryDbResponse>
  canUpdateUser: (name: string | undefined, email: string | undefined , userId: string) => Promise<IQueryDbResponse>
}

export interface IQueryDbResponse {
  wasFound: boolean
  message: string
  selectedUser?: UserType
}