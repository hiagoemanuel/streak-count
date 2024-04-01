import axios from 'axios'
import { parseCookies } from 'nookies'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  validateStatus: (status) => {
    return status < 500
  },
})

api.interceptors.request.use((config) => {
  const { 'streak-count.token': token } = parseCookies()
  api.defaults.headers.common['auth-token'] = token
  return config
})
