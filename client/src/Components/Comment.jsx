import React, { useContext } from 'react'
import { FaTrash } from 'react-icons/fa'
import { Context } from '../context/context';
import moment from 'moment'

export default function Comment({ handleDeleteComment, name, date, text, id }) { 

  const { isAuthenticated} = useContext(Context);
  return (

    <div className=' container font-serif text-green ml-40 pb-5'>
      <div className=' font-semibold'>
        <p className='text-xl'>{name}</p>
        {moment(date).format('lll', 'pt')
}
      </div>
      <div className='w-2/4 pl-3 p-2 shadow-md text-green flex justify-between'>
        <p className='min-w-4/6 '>
          {text}
        </p>
        <div className='flex justify-between'>
          {
            isAuthenticated
            &&
            <FaTrash onClick={() => handleDeleteComment(id)} className='mr-5 text-gold hover:text-red-600 transition cursor-pointer' />
          }
        </div>
      </div>
    </div>
  )
}
