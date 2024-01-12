'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import UserIcon from '@/svgs/user-icon.svg'
import HomeIcon from '@/svgs/home.svg'

import * as S from './style'

export default function Header() {
  const pathname = usePathname()
  const isAuthPage = pathname === '/login' || pathname === '/signup'

  if (!isAuthPage) {
    return (
      <S.Header>
        <S.ViewUser>
          <UserIcon />
          <h2>hiago emanuel</h2>
        </S.ViewUser>
        <Link href='/'><HomeIcon /></Link>
      </S.Header>
    )
  }
}
