import { type SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  path?: string | undefined
}

export const Trash = ({ path, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={40}
    height={40}
    {...props}
  >
    <path
      className={`${path ?? 'fill-orange'}`}
      d="M40 2.222H30L27.143 0H12.857L10 2.222H0v4.445h40M2.857 35.556c0 1.178.602 2.309 1.674 3.142C5.602 39.532 7.056 40 8.57 40H31.43c1.515 0 2.969-.468 4.04-1.302 1.072-.833 1.674-1.964 1.674-3.142V8.889H2.857v26.667Z"
    />
  </svg>
)
