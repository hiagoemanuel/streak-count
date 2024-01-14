import Link from 'next/link'

import InterrogationIcon from '@/svgs/interrogation.svg'
import GearIcon from '@/svgs/gear.svg'

import * as S from './style'

export default function Footer() {
  return (
    <S.Footer>
      <S.HelpButton>
        <InterrogationIcon />
      </S.HelpButton>
      <S.Credits>
        developed by{' '}
        <Link href="https://github.com/hiagoemanuel" target="_blanck">
          {'<'}hiago emanuel{'>'}
        </Link>
      </S.Credits>
      <S.Configs>
        <GearIcon />
      </S.Configs>
    </S.Footer>
  )
}
