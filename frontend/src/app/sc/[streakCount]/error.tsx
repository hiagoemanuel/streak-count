'use client'

import Link from 'next/link'

export default function ErrorStreakCount() {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-1">
      <h1>This streak count does not exist</h1>
      <Link href="/" className="p-3 rounded-xl bg-orange">
        Return to Home Page
      </Link>
    </div>
  )
}
