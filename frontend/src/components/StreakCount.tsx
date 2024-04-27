'use client'

import { AuthContext } from '@/contexts/AuthContext'
import { type IStreakCount } from '@/contexts/AuthContext/types'
import { api } from '@/lib/axios'
import { useContext, useEffect, useState } from 'react'

export default function StreakCount({ streak }: { streak: IStreakCount }) {
  const [streakCount, setStreakCount] = useState<IStreakCount>(streak)
  const { user, setUser } = useContext(AuthContext)
  const [count, setCount] = useState<number>(streakCount.count)
  const [changing, setChanging] = useState<boolean>(false)

  const handlerCount = async (sign: '+' | '-') => {
    if (count === 0 && sign === '-') return
    setChanging(true)
    const counted = sign === '+' ? count + 1 : count - 1

    await api.put(`streak-counts/${streakCount.id}`, { count: counted })

    const newStreakCountList = user?.streakCounts.map((sc) => {
      if (sc === streakCount) return { ...streakCount, count: counted }
      return sc
    })

    if (user && newStreakCountList) setUser({ ...user, streakCounts: newStreakCountList })
    setCount(counted)
    setChanging(false)
  }

  useEffect(() => {
    const updatedStreak = user?.streakCounts.find((sc) => sc.id === streak.id)
    if (updatedStreak) setStreakCount(updatedStreak)
  }, [user])

  return (
    <div>
      <div className="text-center">
        <h1 className={`${changing ? 'opacity-5' : ''} xs:text-8xl`}>{streakCount.count}</h1>
        <h2 className="xs:text-4xl">Streak Count</h2>
        <h3 className="xs:text-3xl">{streakCount.name}</h3>
      </div>
      <div className="mt-6 flex justify-center gap-6 xs:gap-11">
        <div
          onClick={() => {
            handlerCount('-')
          }}
          className="min-w-20 min-h-20 xs:w-24 xs:h-24 rounded-full bg-light-200 dark:bg-dark-200 cursor-pointer flex justify-center items-center"
        >
          <span className="w-1/2 h-2 rounded-full bg-orange" />
        </div>
        <div
          onClick={() => {
            handlerCount('+')
          }}
          className="min-w-20 min-h-20 xs:w-24 xs:h-24 rounded-full bg-light-200 dark:bg-dark-200 relative cursor-pointer flex justify-center items-center"
        >
          <span className="w-1/2 h-2  rounded-full bg-orange absolute rotate-90" />
          <span className="w-1/2 h-2  rounded-full bg-orange" />
        </div>
      </div>
    </div>
  )
}
