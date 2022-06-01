import React from 'react'
import { FaTrash } from 'react-icons/fa'


export default function Comment({ name, date, text }) {

  return (

    <div className=' container font-serif text-green ml-40 pb-5'>
      <p className=' font-semibold'>
        {name} {date}
      </p>
      <p className='w-2/4 pl-3 p-2 shadow-md text-green flex justify-between'>
        <div className='min-w-4/6 '>
          {text}
        </div>
        <div className='flex justify-between'>
          <FaTrash className='mr-5 text-gold hover:text-red-600 transition cursor-pointer' />
        </div>
      </p>
    </div>
  )
}
