import Footer from '@/components/Footer'
import Header from '@/components/Header'
import getUser from '../actions'
import StreakCount from '@/components/StreakCount'

export default async function Streak({ params }: { params: { streakCount: string } }) {
  const user = await getUser()

  const streak = user.streakCounts.find((sc) => sc.name === params.streakCount)

  if (!streak) throw new Error('This streak count does not exist')

  return (
    <>
      <Header />
      <StreakCount streakCount={streak} />
      <Footer streakRoute />
    </>
  )
}
