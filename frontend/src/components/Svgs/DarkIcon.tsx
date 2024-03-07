import { type SVGProps } from 'react'

export const DarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      className="fill-orange"
      d="M20 40c-5.556 0-10.278-1.944-14.167-5.833C1.944 30.277 0 25.556 0 20 0 14.444 1.944 9.722 5.833 5.833 9.723 1.944 14.444 0 20 0c.518 0 1.028.019 1.529.056.5.037.991.092 1.471.166-1.518 1.074-2.732 2.473-3.64 4.196C18.452 6.14 17.999 8 18 10c0 3.333 1.167 6.167 3.5 8.5S26.667 22 30 22c2.037 0 3.907-.454 5.611-1.362 1.704-.908 3.093-2.121 4.167-3.638.074.482.13.972.166 1.471.037.5.056 1.009.056 1.529 0 5.556-1.944 10.278-5.833 14.167C30.277 38.056 25.556 40 20 40Z"
    />
  </svg>
)