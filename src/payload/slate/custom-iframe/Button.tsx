'use client'

import { LeafButton } from '@payloadcms/richtext-slate/client'

const Button = () => {
  return (
    <LeafButton format={'custom-iframe'}>
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
        <path d='M7 21h10' />
        <rect width='20' height='14' x='2' y='3' rx='2' />
      </svg>
    </LeafButton>
  )
}

export default Button
