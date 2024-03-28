'use client'

import { api } from '@/lib/axios'
import { type AxiosResponse } from 'axios'
import { parseCookies, setCookie } from 'nookies'
import { createContext, useState, type ReactNode, useEffect } from 'react'
import type { IAuthContext, IHttpResponse, ILogIn, IUser } from './types'
import { useRouter } from 'next/navigation'

export const AuthContext = createContext({} as IAuthContext)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null)
  const router = useRouter()

  useEffect(() => {
    const { 'streak-count.token': token } = parseCookies()

    if (token) {
      const fetch = async () => {
        const res: AxiosResponse<IHttpResponse<IUser>> = await api.get(`/users/${token}`, {
          headers: { 'auth-token': token },
        })
        console.log(res.data.body)
        setUser(res.data.body)
      }
      fetch()
    }
  }, [])

  const isAuthenticated = !!user

  const login = async ({ email, password }: ILogIn) => {
    const res: AxiosResponse<IHttpResponse<IUser>> = await api.post('/login', {
      email,
      password,
    })
    const token: string = res.headers['auth-token']

    setCookie(undefined, 'streak-count.token', token, { maxAge: 60 * 60 * 24 * 30 }) // 30d

    setUser(res.data.body)

    router.push('/')
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login }}>{children}</AuthContext.Provider>
  )
}
