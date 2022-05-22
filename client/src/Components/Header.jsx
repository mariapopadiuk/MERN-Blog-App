import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='container font-serif px-6 bg-green flex mx-auto p-2 flex-wrap justify-between '>
      <div className='ml-10 text-2xl text-gold'>
        <a href="">MERN</a>
      </div>
      
      <div className='text-base text-white flex items-center '>
        <Link to="/" className='mr-8 no-underline hover:underline decoration-gold decoration-2 underline-offset-4'>HOME</Link >
        <Link to="/login" className='mr-10 no-underline hover:underline decoration-gold decoration-2 underline-offset-4'>LOGIN</Link>
      </div>
    </header>
  )
}
