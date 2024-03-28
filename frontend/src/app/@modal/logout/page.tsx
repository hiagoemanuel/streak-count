'use client'

import Modal from '@/components/Modal'
import { useRouter } from 'next/navigation'
import { destroyCookie } from 'nookies'

export default function Logout() {
  const router = useRouter()

  const logout = () => {
    destroyCookie(undefined, 'streak-count.token')
    router.back()
    router.refresh()
  }

  return (
    <Modal
      title="Do you want to log out of your account?"
      inputs={{
        submit: { value: 'Yes', event: logout },
        refuse: { value: 'No' },
      }}
    />
  )
}
