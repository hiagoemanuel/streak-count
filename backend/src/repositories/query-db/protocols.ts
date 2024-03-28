import { type StreakCountType } from '../../schemas/streakCount'
import { type UserType } from '../../schemas/user'

export interface IMongoQueryDbRepository {
  findNameOrEmail: (name: string, email: string) => Promise<IQueryDbResponse<UserType>>
  canUpdateUser: (
    name: string | undefined,
    email: string | undefined,
    userId: string,
  ) => Promise<IQueryDbResponse<UserType>>
  canUpdateStreakCount: (
    name: string | undefined,
    id: string,
  ) => Promise<IQueryDbResponse<StreakCountType>>
}

export interface IQueryDbResponse<D> {
  wasFound: boolean
  message: string
  dbReturn?: D
}
