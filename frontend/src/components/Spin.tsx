export default function Spin({ className }: { className: string }) {
  return (
    <div
      className={`w-12 h-12 border-[16px] border-dotted ${className} rounded-full animate-spin`}
    />
  )
}
