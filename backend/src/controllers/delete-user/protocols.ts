import { UserType } from "../../schemas/user";
import { HttpResponse } from "../protocols";

export interface IDeleteUserController {
  handler: (userId: string) => Promise<HttpResponse<UserType>>
}

export interface IDeleteUserRepository {
  deleteUser: (userId: string) => Promise<UserType>
}