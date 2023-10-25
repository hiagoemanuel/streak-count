import Image from 'next/image'
import * as S from './style'

export default function Header() {
  return (
        <S.Header>
            <S.ViewUser>
                <Image
                    src='user-icon.svg'
                    alt='user-icon'
                    width={40}
                    height={40}
                />
                <h2>hiago emanuel</h2>
            </S.ViewUser>
            <Image
                src='home.svg'
                alt='home-icon'
                width={40}
                height={40}
            />
        </S.Header>
  )
}
