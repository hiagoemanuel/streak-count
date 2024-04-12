'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StreakCount from '@/components/StreakCount'
import { AuthContext } from '@/contexts/AuthContext'
import { type IStreakCount } from '@/contexts/AuthContext/types'
import { useContext, useEffect, useState } from 'react'

export default function Streak({ params }: { params: { streakCount: string } }) {
  const { user } = useContext(AuthContext)
  const [streakCount, setStreakCount] = useState<IStreakCount>()

  useEffect(() => {
    const streak = user?.streakCounts.find(
      (sc) => sc.name === params.streakCount.replaceAll('%20', ' '),
    )
    setStreakCount(streak)
    if (user && !streak) throw new Error('This streak count does not exist')
  }, [user])

  return (
    <>
      <Header />
      {streakCount ? <StreakCount streakCount={streakCount} /> : <></>}
      <Footer streakRoute={params.streakCount} />
    </>
  )
}
