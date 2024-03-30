import { type IUser, type IHttpResponse } from '@/contexts/AuthContext/types'
import { api } from '@/lib/axios'
import { cookies } from 'next/headers'

export default async function getUser(): Promise<IUser> {
  const token = cookies().get('streak-count.token')?.value
  api.defaults.headers.common['auth-token'] = token

  const { data }: { data: IHttpResponse<IUser> } = await api.get(`/users/${token}`)
  return { ...data.body }
}
