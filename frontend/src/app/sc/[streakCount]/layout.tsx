import { type Metadata } from 'next'
import DeleteStreak from '../../../components/modals/DeleteStreak'
import ResetStreak from '../../../components/modals/ResetStreak'

export function generateMetadata({ params }: { params: { streakCount: string } }): Metadata {
  const streakCount = params.streakCount
  return { title: `Streak Count | ${streakCount}` }
}

interface Props {
  children: React.ReactNode
  params: { streakCount: string }
}

export default function StreakCountLayout(props: Props) {
  const param = props.params.streakCount
  return (
    <>
      {props.children}
      <DeleteStreak streakCountName={param} />
      <ResetStreak streakCountName={param} />
    </>
  )
}
