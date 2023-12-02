import Link from 'next/link'
import * as S from './style'

const streakListTest = [
  {
    title: 'kekw',
    counter: 777
  },
  {
    title: 'Pog',
    counter: 509
  },
  {
    title: 'awrqw',
    counter: 5555
  },
  {
    title: 'adadwaeaw',
    counter: 3123
  },
  {
    title: 'dasdaw',
    counter: 112
  },
  {
    title: 'adsa',
    counter: 12
  },
  {
    title: 'faweqweqwe',
    counter: 7
  }
]

export default function Home() {
  return (
    <S.Container>
      <S.SubHeader>
        <S.OrderList>
          <div /><div /><div />
        </S.OrderList>
        <S.NewStreak />
      </S.SubHeader>
      <S.StreakList>
        {
          streakListTest.map(streak => (
            <Link href={streak.title} key={streak.title}>
              <S.Streak>
                <h1>{streak.title}</h1>
                <h1>{streak.counter}</h1>
              </S.Streak>
            </Link>
          ))
        }
      </S.StreakList>
    </S.Container>
  )
}
