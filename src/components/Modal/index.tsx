'use client'

import { useRouter } from 'next/navigation'
import type ModalProps from '@/types/global'
import * as S from './style'

export default function Modal({ children, title, inputs }: ModalProps) {
  const router = useRouter()

  return (
    <S.Container>
      <S.Form action="/">
        <S.Title>{title}</S.Title>
        <S.Inputs>
          {children}
          <input
            className={inputs.submit.color ?? 'red'}
            type="submit"
            value={inputs.submit.value}
          />
          <div
            className={inputs.refuse.color ?? 'orange'}
            onClick={() => router.back()}
          >
            {inputs.refuse.value}
          </div>
        </S.Inputs>
      </S.Form>
    </S.Container>
  )
}
