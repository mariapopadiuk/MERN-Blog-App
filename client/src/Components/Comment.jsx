import React, { useContext } from 'react'
import { FaTrash } from 'react-icons/fa'
import { Context } from '../context/context';
import axios from 'axios';
import moment from 'moment'

export default function Comment({ id, name, date, text }) { 

  const { isAuthenticated, token } = useContext(Context);
  function deleteComment() {
    axios({
      method: 'delete', //you can set what request you want to be
      url: 'http://localhost:4000/comments/delete-comment/',
      data: { comment_id: id },
      headers: {
        Authorization: 'Bearer ' + token
      }
    }) 
  } 
 
  return (

    <div className=' container font-serif text-green ml-40 pb-5'>
      <p className=' font-semibold'>
        <h3 className='text-xl'>{name}</h3>
        {moment(date).format('lll', 'pt')
}
      </p>
      <p className='w-2/4 pl-3 p-2 shadow-md text-green flex justify-between'>
        <div className='min-w-4/6 '>
          {text}
        </div>
        <div className='flex justify-between'>
          {
            isAuthenticated
            &&
            <FaTrash onClick={deleteComment} className='mr-5 text-gold hover:text-red-600 transition cursor-pointer' />
          }
        </div>
      </p>
    </div>
  )
}
