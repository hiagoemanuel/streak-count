'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { User } from './Svgs/User'
import { Home } from './Svgs/Home'

export default function Header() {
  const pathname = usePathname()
  const isAuthPage = pathname === '/login' || pathname === '/signup'

  if (!isAuthPage) {
    return (
      <header className="flex justify-between items-center">
        <div className="flex items-baseline gap-2">
          <User />
          <h3 className="text-orange hidden sm:block">hiago emanuel</h3>
        </div>
        <Link href="/">
          <Home />
        </Link>
      </header>
    )
  }
}
