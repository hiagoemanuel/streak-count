export interface IUser {
  id: string
  name: string
  createdAt: Date
  credencials: {
    email: string
    passwosrd: string
  }
  streakCounts: Array<{
    id: string
    name: string
    createdAt: string
    count: number
  }>
}

export interface ILogIn {
  email: string
  password: string
}

export interface IHttpResponse<B, H = undefined> {
  body: B
  header?: H
  message: string
  statusCode: number
  statusText: string
}

export interface IAuthContext {
  isAuthenticated: boolean
  user: IUser | null
  login: (credentials: ILogIn) => Promise<void>
}
