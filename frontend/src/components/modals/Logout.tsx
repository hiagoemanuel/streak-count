'use client'

import Modal from '@/components/Modal'
import { ModalContext } from '@/contexts/ModalContext'
import { useRouter } from 'next/navigation'
import { destroyCookie } from 'nookies'
import { useContext } from 'react'

export default function Logout() {
  const router = useRouter()
  const { closeModal } = useContext(ModalContext)

  const logout = () => {
    destroyCookie(undefined, 'streak-count.token')
    closeModal('logout')
    router.back()
    router.refresh()
  }

  return (
    <Modal
      modalId="logout"
      title="Do you want to log out of your account?"
      inputs={{
        submit: { value: 'Yes', event: logout },
        refuse: { value: 'No' },
      }}
    />
  )
}
