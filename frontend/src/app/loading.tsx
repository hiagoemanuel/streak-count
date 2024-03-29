import Spin from '@/components/Spin'

export default function Loading() {
  return (
    <div className="w-full h-svh flex justify-center items-center absolute top-0 left-0 z-50">
      <Spin className="border-orange" />
    </div>
  )
}
