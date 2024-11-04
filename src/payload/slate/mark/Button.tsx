'use client'

import { LeafButton } from '@payloadcms/richtext-slate/client'

const Button = () => {
  return (
    <LeafButton format={'mark'}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <path d='m9 11-6 6v3h9l3-3' />
        <path d='m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4' />
      </svg>
    </LeafButton>
  )
}

export default Button
