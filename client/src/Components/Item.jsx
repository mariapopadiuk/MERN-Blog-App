import React from 'react'
import { Link } from 'react-router-dom'
import { FaTrash } from "react-icons/fa";


export default function Item( {img, title, text, subText, id, date}) {
  return (
// w-16 md:w-32 lg:w-48
    <div className="mx-2 sm:w-1/3 w-full rounded overflow-hidden shadow-lg p-4 m-5 hover:scale-105 transition-all
      duration-500">
        <img className="w-full" src={img} alt="Sunset in the mountains"/>
          <div className="px-6 py-4">
            
            <div className="font-bold text-gold text-xl mb-2">{title}</div>
          <p className="text-gray-600 leading-relaxed text-base h-20 overflow-hidden">
              {text}
            </p>
          </div>
        <div className="px-6 flex flex-wrap justify-between text-gray-600 ">
          <span className=' no-underline hover:underline decoration-gold decoration-2 underline-offset-4 '>
            <Link to={`/itempreview/id=${id}`}>{subText}</Link>
            </span>
        <span className='text-gold  drop-shadow-lg'>
            {date}
          </span>
          <span>
          <a href="#" className='pr-3 text-gold hover:text-red-600 transition'><FaTrash /></a >
          </span>
          </div>
      </div>
   )
}
