'use client'

import Link from 'next/link'

import { User } from './Svgs/User'
import { Home } from './Svgs/Home'
import { useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContext'

export default function Header() {
  const { user } = useContext(AuthContext)

  return (
    <header className="flex justify-between items-center">
      <div className="flex items-baseline gap-2">
        <User className="hidden xs:block" />
        <h3 className="text-orange">{user?.name}</h3>
      </div>
      <Link href="/">
        <Home />
      </Link>
    </header>
  )
}
