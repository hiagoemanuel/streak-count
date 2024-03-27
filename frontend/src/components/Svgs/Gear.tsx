import { type SVGProps } from 'react'

export const Gear = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" {...props}>
    <path
      className="fill-orange"
      d="M20.005 27a7.3 7.3 0 0 1-5.09-2.05A6.905 6.905 0 0 1 12.809 20c0-1.857.758-3.637 2.108-4.95A7.3 7.3 0 0 1 20.004 13a7.3 7.3 0 0 1 5.09 2.05A6.904 6.904 0 0 1 27.2 20a6.904 6.904 0 0 1-2.108 4.95A7.3 7.3 0 0 1 20.005 27Zm15.276-5.06c.083-.64.144-1.28.144-1.94 0-.66-.061-1.32-.144-2l4.339-3.26a.99.99 0 0 0 .247-1.28l-4.113-6.92c-.246-.44-.802-.62-1.254-.44l-5.12 2c-1.069-.78-2.18-1.46-3.474-1.96l-.761-5.3a1.006 1.006 0 0 0-.356-.603A1.058 1.058 0 0 0 24.117 0h-8.225c-.514 0-.945.36-1.028.84l-.76 5.3c-1.296.5-2.406 1.18-3.475 1.96l-5.12-2c-.452-.18-1.008 0-1.254.44L.143 13.46a.968.968 0 0 0 .246 1.28L4.728 18c-.083.68-.144 1.34-.144 2 0 .66.061 1.3.144 1.94L.389 25.26c-.39.3-.514.84-.246 1.28l4.112 6.92c.247.44.802.6 1.254.44l5.12-2.02c1.069.8 2.18 1.48 3.475 1.98l.76 5.3c.082.48.514.84 1.028.84h8.225c.514 0 .946-.36 1.028-.84l.76-5.3c1.296-.52 2.406-1.18 3.475-1.98l5.12 2.02c.452.16 1.008 0 1.254-.44l4.113-6.92a.99.99 0 0 0-.247-1.28l-4.339-3.32Z"
    />
  </svg>
)
