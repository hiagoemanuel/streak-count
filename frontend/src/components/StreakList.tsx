'use client'

import { AuthContext } from '@/contexts/AuthContext'
import Link from 'next/link'
import { useContext } from 'react'

export default async function StreakList() {
  const { user } = useContext(AuthContext)

  const streaks = user?.streakCounts ?? []

  return streaks.map((streak) => (
    <Link
      className="flex justify-between p-3 border-b-2 border-solid border-light-200 dark:border-dark-200 last:border-[transparent]"
      href={'sc/' + streak.name}
      key={streak.name}
    >
      <h1 className="text-xl sm:text-4xl">{streak.name}</h1>
      <h1 className="text-xl sm:text-4xl">{streak.count}</h1>
    </Link>
  ))
}
