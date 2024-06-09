'use client'

import Modal from '@/components/Modal'
import { AuthContext } from '@/contexts/AuthContext'
import { type IStreakCount } from '@/contexts/AuthContext/types'
import { ModalContext } from '@/contexts/ModalContext'
import { api } from '@/lib/axios'
import { useContext } from 'react'

export default function ResetStreak({ streakCountName }: { streakCountName: string }) {
  const { user, setUser } = useContext(AuthContext)
  const { closeModal } = useContext(ModalContext)

  const resetStreak = async () => {
    const scId = user?.streakCounts.find((sc) => sc.name === streakCountName)?.id

    const { data } = await api.put(`/streak-counts/${scId}`, { count: 0 })
    const updatedStreak: IStreakCount = data.body
    const newStreakCountList: IStreakCount[] | undefined = user?.streakCounts.map((sc) => {
      if (sc.name === streakCountName) return updatedStreak
      return sc
    })

    if (user && newStreakCountList) setUser({ ...user, streakCounts: newStreakCountList })
    closeModal('reset-streak')
  }

  return (
    <Modal
      modalId="reset-streak"
      title="Do you want to reset your streak?"
      inputs={{
        submit: { value: 'Yes', event: resetStreak },
        refuse: { value: 'No' },
      }}
    />
  )
}
