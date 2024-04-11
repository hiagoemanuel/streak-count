export interface IUser {
  id: string
  name: string
  createdAt: Date
  credencials: {
    email: string
    passwosrd: string
  }
  streakCounts: IStreakCount[]
}

export interface IStreakCount {
  id: string
  name: string
  createdAt: string
  count: number
}

export interface ILogin {
  email: string
  password: string
  dontForget: string
}

export interface ISignup {
  name: string
  email: string
  password: string
  dontForget: string
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
  setUser: (user: IUser) => void
  login: (credentials: ILogin) => Promise<void>
  signup: (credentials: ISignup) => Promise<void>
}
