import { type Metadata } from 'next'
import DeleteStreak from '../../../components/modals/DeleteStreak'
import NewStreak from '../../../components/modals/NewStreak'
import ResetStreak from '../../../components/modals/ResetStreak'

export function generateMetadata({ params }: { params: { streakCount: string } }): Metadata {
  const streakCount = params.streakCount
  return { title: `Streak Count | ${streakCount}` }
}

export default function StreakCountLayout(props: { children: React.ReactNode }) {
  return (
    <>
      {props.children}
      <DeleteStreak />
      <NewStreak />
      <ResetStreak />
    </>
  )
}
