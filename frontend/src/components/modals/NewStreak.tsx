'use client'

import Modal from '@/components/Modal'
import { AuthContext } from '@/contexts/AuthContext'
import { ModalContext } from '@/contexts/ModalContext'
import { api } from '@/lib/axios'
import { useRouter } from 'next/navigation'
import { useContext, useRef, useState } from 'react'

export default function NewStreak() {
  const { user, setUser } = useContext(AuthContext)
  const { isModalOpen, closeModal } = useContext(ModalContext)
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputPlaceholder, setInputPlaceholder] = useState<string>('name *')
  const router = useRouter()

  const createStreak = async () => {
    const userId = user?.id ?? ''
    const streakName = inputRef.current?.value ?? ''

    try {
      const res = await api.post('/streak-counts', { userId, name: streakName })
      console.log(res)
      if (res.status !== 201) throw 'invalid name, try again'

      const streakCount = res.data.body
      if (user) setUser({ ...user, streakCounts: [...user.streakCounts, streakCount] })

      closeModal('new-streak')
      router.push('/sc/' + streakName)
    } catch (err) {
      setInputPlaceholder(err as string)
      if (inputRef.current) inputRef.current.value = ''
    }
  }

  if (isModalOpen('new-streak')) {
    return (
      <Modal
        modalId="new-streak"
        title="Create streak count"
        inputs={{
          submit: { value: 'Create', color: 'orange', event: createStreak },
          refuse: {
            value: "Don't Create",
            color: 'red',
            event: () => {
              setInputPlaceholder('name *')
            },
          },
        }}
      >
        <input
          className="text-input-form"
          type="text"
          placeholder={inputPlaceholder}
          ref={inputRef}
        />
      </Modal>
    )
  } else {
    return <></>
  }
}
