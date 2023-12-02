import Footer from '@/components/Footer'
import Header from '@/components/Header'

import * as S from './style'

export default function LoggedLayout({ children }: { children: React.ReactNode }) {
  return (
        <S.MainContainer>
            <Header />
            {children}
            <Footer />
        </S.MainContainer>
  )
}
