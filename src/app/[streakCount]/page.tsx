'use client'

import { useState } from 'react'

export default function Streak({
  params
}: {
  params: { streakCount: string }
}) {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <div className="text-center">
        <h1 className="xs:text-8xl">{count}</h1>
        <h2 className="xs:text-4xl">Streak Count</h2>
        <h3 className="xs:text-3xl">{params.streakCount}</h3>
      </div>
      <div className="mt-6 flex justify-center gap-6 xs:gap-11">
        <div
          className="min-w-20 min-h-20 xs:w-24 xs:h-24 rounded-full bg-light-200 dark:bg-dark-200 cursor-pointer flex justify-center items-center "
          onClick={() => setCount((c) => c - 1)}
        >
          <span className="w-1/2 h-2  rounded-full bg-orange" />
        </div>
        <div
          className="min-w-20 min-h-20 xs:w-24 xs:h-24 rounded-full bg-light-200 dark:bg-dark-200 relative cursor-pointer flex justify-center items-center "
          onClick={() => setCount((c) => c + 1)}
        >
          <span className="w-1/2 h-2  rounded-full bg-orange absolute rotate-90" />
          <span className="w-1/2 h-2  rounded-full bg-orange" />
        </div>
      </div>
    </div>
  )
}
