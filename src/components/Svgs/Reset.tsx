import { type SVGProps } from 'react'

export const Reset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={40}
    height={40}
    viewBox="0 0 44 44"
    {...props}
  >
    <path
      className="stroke-orange"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M39.778 13.111C36.66 6.533 29.86 2 22 2a20 20 0 1 0 14.142 34.142c3.75-3.75 4.805-5.257 5.858-10.17M42 2v13.333H28.667"
    />
  </svg>
)
