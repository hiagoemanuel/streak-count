import getUser from '@/app/actions'
import Link from 'next/link'

export default async function StreakList() {
  const data = await getUser()

  const streaks = data.streakCounts ?? []

  return streaks.map((streak) => (
    <Link
      className="flex justify-between p-3 border-b-2 border-solid border-light-200 dark:border-dark-200 last:border-[transparent]"
      href={streak.name}
      key={streak.name}
    >
      <h1 className="text-xl sm:text-4xl">{streak.name}</h1>
      <h1 className="text-xl sm:text-4xl">{streak.count}</h1>
    </Link>
  ))
}
