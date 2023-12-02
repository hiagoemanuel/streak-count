import Link from 'next/link'

import UserIcon from '@/svgs/user-icon.svg'
import HomeIcon from '@/svgs/home.svg'

import * as S from './style'

export default function Header() {
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
