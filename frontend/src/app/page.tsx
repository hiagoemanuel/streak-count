import { api } from '@/lib/axios'
import Link from 'next/link'

export default async function Home() {
  const user = await api.get('/users/65fb6ffc454aa43562e5bc8d')

  const streaks: Array<{ name: string; count: number }> = user.data.body.streakCounts

  return (
    <div className="w-10/12 self-center xl:w-216">
      <header className="w-full flex justify-between">
        <div className="w-7 h-6 flex flex-col justify-between cursor-pointer">
          <div className="w-full h-1 bg-orange" />
          <div className="w-full h-1 bg-orange" />
          <div className="w-full h-1 bg-orange" />
        </div>
        <Link href="/new-streak">
          <div className="w-7 h-7 flex justify-center items-center relative">
            <div className="w-full h-1 inline-block bg-orange rotate-90 absolute" />
            <div className="w-full h-1 inline-block bg-orange " />
          </div>
        </Link>
      </header>
      <div className="h-48 overflow-y-scroll flex flex-col gap-1 scrollbar">
        {streaks.map((streak) => (
          <Link
            className="flex justify-between p-3 border-b-2 border-solid border-light-200 dark:border-dark-200 last:border-[transparent]"
            href={streak.name}
            key={streak.name}
          >
            <h1 className="text-xl sm:text-4xl">{streak.name}</h1>
            <h1 className="text-xl sm:text-4xl">{streak.count}</h1>
          </Link>
        ))}
      </div>
    </div>
  )
}
