import React from 'react'

export default function Header() {
  return (
    <header className='container font-serif px-6 bg-green flex mx-auto p-2 flex-wrap justify-between '>
      <div className='text-2xl text-gold'>
        <a href="">MERN</a>
      </div>
      <div className='text-base text-white flex items-center no-underline hover:underline decoration-gold decoration-2 underline-offset-4'>
        <a href="">HOME</a >
      </div>
    </header>
  )
}
