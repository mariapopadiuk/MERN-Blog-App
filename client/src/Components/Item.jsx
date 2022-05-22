import React from 'react'
import { Link } from 'react-router-dom'

export default function Item( {img, title, text, subText, id, date}) {
  return (
    <section className='container font-serif mx-auto bg-bege  flex flex-wrap  pb-4'>

      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto p-4 m-5 hover:scale-105 transition-all
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
          <span>
            {date}
          </span>
          </div>
      </div>

     
    </section>
  )
}
