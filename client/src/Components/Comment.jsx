import React from 'react'

export default function Comment({name, date, text}) {
  return (

    <div className=' container font-serif text-green ml-40 pb-5'>
      <p className=' font-semibold'>
        {name} {date}
      </p>
      <p className='w-2/4 pl-3 p-2 shadow-md text-green '>
        {text}
      </p>
    </div>
  )
}
