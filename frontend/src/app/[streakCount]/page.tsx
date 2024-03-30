import Footer from '@/components/Footer'
import Header from '@/components/Header'
import getUser from '../actions'

export default async function Streak({ params }: { params: { streakCount: string } }) {
  const user = await getUser()

  const streak = user.streakCounts.find((sc) => sc.name === params.streakCount)

  return (
    <>
      <Header />
      <div>
        <div className="text-center">
          <h1 className="xs:text-8xl">{streak?.count}</h1>
          <h2 className="xs:text-4xl">Streak Count</h2>
          <h3 className="xs:text-3xl">{streak?.name}</h3>
        </div>
        <div className="mt-6 flex justify-center gap-6 xs:gap-11">
          <div className="min-w-20 min-h-20 xs:w-24 xs:h-24 rounded-full bg-light-200 dark:bg-dark-200 cursor-pointer flex justify-center items-center">
            <span className="w-1/2 h-2 rounded-full bg-orange" />
          </div>
          <div className="min-w-20 min-h-20 xs:w-24 xs:h-24 rounded-full bg-light-200 dark:bg-dark-200 relative cursor-pointer flex justify-center items-center">
            <span className="w-1/2 h-2  rounded-full bg-orange absolute rotate-90" />
            <span className="w-1/2 h-2  rounded-full bg-orange" />
          </div>
        </div>
      </div>
      <Footer streakRoute />
    </>
  )
}
