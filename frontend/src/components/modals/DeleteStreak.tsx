'use client'

import Modal from '@/components/Modal'
import { AuthContext } from '@/contexts/AuthContext'
import { ModalContext } from '@/contexts/ModalContext'
import { api } from '@/lib/axios'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

export default function DeleteStreak({ streakCountName }: { streakCountName: string }) {
  const { user, setUser } = useContext(AuthContext)
  const { closeModal } = useContext(ModalContext)
  const router = useRouter()
  const streakCount = user?.streakCounts.find(
    (sc) => sc.name === streakCountName.replaceAll('%20', ' '),
  )

  const deleteStreak = async () => {
    router.push('/')
    closeModal('delete-streak')
    try {
      await api.delete(`/streak-counts/${streakCount?.id}`)
      const newStreakCountList = user?.streakCounts.filter(
        (sc) => sc.name !== streakCountName.replaceAll('%20', ' '),
      )
      if (user && newStreakCountList) {
        setUser({ ...user, streakCounts: newStreakCountList })
      }
    } catch {
      router.push('/')
      closeModal('delete-streak')
    }
  }

  return (
    <Modal
      modalId="delete-streak"
      title="Do you want to delete your progress?"
      inputs={{
        submit: { value: 'Yes', color: 'red', event: deleteStreak },
        refuse: { value: 'No', color: 'orange' },
      }}
    />
  )
}
