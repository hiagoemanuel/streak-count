'use client'

import { api } from '@/lib/axios'
import { type AxiosResponse } from 'axios'
import { parseCookies, setCookie } from 'nookies'
import { createContext, useState, type ReactNode, useEffect } from 'react'
import type { IAuthContext, IHttpResponse, ILogin, ISignup, IUser } from './types'
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
        setUser(res.data.body)
      }
      fetch()
    }
  }, [])

  const isAuthenticated = !!user

  const login = async ({ email, password, dontForget }: ILogin) => {
    const { data, headers }: AxiosResponse<IHttpResponse<IUser>> = await api.post('/login', {
      email,
      password,
    })

    if (data.statusCode === 400) throw data.message

    const token: string = headers['auth-token']

    if (dontForget === 'on') {
      setCookie(undefined, 'streak-count.token', token, { maxAge: 60 * 60 * 24 * 30 }) // 30d
    } else {
      setCookie(undefined, 'streak-count.token', token, { maxAge: 60 * 60 * 24 }) // 01d
    }

    setUser(data.body)

    router.push('/')
  }

  const signup = async ({ name, email, password, dontForget }: ISignup) => {
    const { data, headers }: AxiosResponse<IHttpResponse<IUser>> = await api.post('/signup', {
      name,
      email,
      password,
    })

    if (!(data.statusCode === 201)) throw data.message

    const token: string = headers['auth-token']

    if (dontForget === 'on') {
      setCookie(undefined, 'streak-count.token', token, { maxAge: 60 * 60 * 24 * 30 }) // 30d
    } else {
      setCookie(undefined, 'streak-count.token', token, { maxAge: 60 * 60 * 24 }) // 01d
    }

    setUser(data.body)

    router.push('/')
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup }}>
      {children}
    </AuthContext.Provider>
  )
}
