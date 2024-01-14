'use client'

import { useState } from 'react'
import * as S from './style'

export default function Streak({
  params
}: {
  params: { streakCount: string }
}) {
  const [count, setCount] = useState<number>(0)

  return (
    <S.Container>
      <S.Counter>
        <h1>{count}</h1>
        <h2>Streak Count</h2>
        <h3>{params.streakCount}</h3>
      </S.Counter>
      <S.StreakButtons>
        <div
          id="less"
          onClick={() => {
            setCount((c) => c - 1)
          }}
        />
        <div
          id="more"
          onClick={() => {
            setCount((c) => c + 1)
          }}
        />
      </S.StreakButtons>
    </S.Container>
  )
}
