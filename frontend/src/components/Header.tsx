'use client'

import Link from 'next/link'

import { User } from './Svgs/User'
import { Home } from './Svgs/Home'
import { useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'

export default function Header() {
  const { user } = useContext(AuthContext)
  const router = useRouter()

  return (
    <header className="flex justify-between items-center">
      <div className="flex items-baseline gap-2">
        <User />
        <h3 className="text-orange hidden sm:block">{user?.name}</h3>
      </div>
      <Link
        href="/"
        onClick={() => {
          router.refresh()
        }}
      >
        <Home />
      </Link>
    </header>
  )
}
