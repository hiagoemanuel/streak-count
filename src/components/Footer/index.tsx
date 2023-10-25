import Image from 'next/image'
import * as S from './style'
import Link from 'next/link'

export default function Footer() {
  return (
        <S.Footer>
            <S.HelpButton>
                <Image
                    src='/interrogation.svg'
                    alt='help-button'
                    width={30}
                    height={40}
                />
            </S.HelpButton>
            <S.Credits>
                developed by <Link
                    href='https://github.com/hiagoemanuel'
                    target='_blanck'
                >
                    {'<'}hiago emanuel{'>'}
                </Link>
            </S.Credits>
            <S.Configs>
                <Image
                    src='/gear.svg'
                    alt='help-button'
                    width={40}
                    height={40}
                />
            </S.Configs>
        </S.Footer>
  )
}
