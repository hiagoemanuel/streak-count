'use client'

import { useRouter } from 'next/navigation'
import * as S from './style'

export default function Modal({
  children,
  title,
  inputs
}: {
  children?: React.ReactNode
  title: string
  inputs: {
    submit: { value: string; color?: 'red' | 'orange' }
    refuse: { value: string; color?: 'red' | 'orange' }
  }
}) {
  const router = useRouter()

  return (
    <S.Container>
      <S.Form action="/">
        <S.Title>{title}</S.Title>
        <S.Inputs>
          {children}
          <input
            className={inputs.submit.color ?? 'orange'}
            type="submit"
            value={inputs.submit.value}
          />
          <div
            className={inputs.refuse.color ?? 'red'}
            onClick={() => router.back()}
          >
            {inputs.refuse.value}
          </div>
        </S.Inputs>
      </S.Form>
    </S.Container>
  )
}
