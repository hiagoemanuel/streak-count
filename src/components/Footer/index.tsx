import Link from 'next/link'
import InterrogationIcon from '@/svgs/interrogation.svg'
import ConfigButton from './ConfigButton'

export default function Footer() {
  return (
    <footer className="flex justify-between items-end gap-2 flex-wrap">
      <div>
        <Link
          className="w-[4.688rem] h-[4.688rem] flex justify-center items-center rounded-full bg-light-200 dark:bg-dark-200"
          href="/help"
        >
          <InterrogationIcon />
        </Link>
      </div>
      <h4 className="order-1 mx-auto text-[.875rem] xs:text-lg min-[498px]:order-none">
        developed by{' '}
        <Link
          className="text-orange"
          href="https://github.com/hiagoemanuel"
          target="_blanck"
        >
          {'<'}hiago emanuel{'>'}
        </Link>
      </h4>
      <ConfigButton />
    </footer>
  )
}
