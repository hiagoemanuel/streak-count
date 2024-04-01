'use client'

import { type IStreakCount } from '@/contexts/AuthContext/types'
import { api } from '@/lib/axios'
import { useState } from 'react'

export default function StreakCount({ streakCount }: { streakCount: IStreakCount }) {
  const [count, setCount] = useState<number>(streakCount.count)

  const handlerCount = (sign: '+' | '-') => {
    if (count === 0 && sign === '-') return
    const fetch = async (count: number) => {
      await api.put(`streak-counts/${streakCount.id}`, { count })
    }
    const counted = sign === '+' ? count + 1 : count - 1
    fetch(counted)
    setCount(counted)
  }

  return (
    <div>
      <div className="text-center">
        <h1 className="xs:text-8xl">{count}</h1>
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
