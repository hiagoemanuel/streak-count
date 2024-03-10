import { UserType } from "../../schemas/user";
import { HttpResponse } from "../protocols";

export interface IUpdateUserController {
  handler: (userId: string) => Promise<HttpResponse<UserType | null>>
}

export interface IUpdateUserRepository {
  updateUser: (userId: string) => Promise<UserType>
}