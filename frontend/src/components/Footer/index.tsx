import Link from 'next/link'
import ConfigButton from './ConfigButton'
import { Interrogation } from '../Svgs/Interrogation'

export default function Footer({ streakRoute }: { streakRoute?: boolean }) {
  return (
    <footer className="flex justify-between items-end gap-2 flex-wrap">
      <div>
        <Link
          className="w-20 h-20 flex justify-center items-center rounded-full bg-light-200 dark:bg-dark-200"
          href="/help"
        >
          <Interrogation />
        </Link>
      </div>
      <h4 className="order-1 mx-auto text-[.875rem] xs:text-lg min-[509px]:order-none">
        developed by{' '}
        <Link className="text-orange" href="https://github.com/hiagoemanuel" target="_blanck">
          {'<'}hiago emanuel{'>'}
        </Link>
      </h4>
      <ConfigButton streakRoute={streakRoute} />
    </footer>
  )
}
