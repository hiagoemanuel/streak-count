'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import UserIcon from '@/svgs/user-icon.svg'
import HomeIcon from '@/svgs/home.svg'

export default function Header() {
  const pathname = usePathname()
  const isAuthPage = pathname === '/login' || pathname === '/signup'

  if (!isAuthPage) {
    return (
      <header className="flex justify-between items-center">
        <div className="flex items-baseline gap-2">
          <UserIcon />
          <h3 className="text-orange hidden sm:block">hiago emanuel</h3>
        </div>
        <Link href="/">
          <HomeIcon />
        </Link>
      </header>
    )
  }
}
