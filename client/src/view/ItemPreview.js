import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import img from '../img/bg.png'
import { useParams } from "react-router-dom";
import { data } from '../bd'

export default function ItemPreview() {
  let { id } = useParams();
  console.log(id);
  return (
    <>
      <Header />


      <section className='container font-serif mx-auto bg-bege tracking-wide'>

        <div>
          <img src={data[id].img} className="w-3/4 m-auto p-10" />
        </div>

        <h1 className='container text-green text-center text-4xl pb-5 font-semibold'>
          {data[id].title}
      </h1>

        <p className='text-center font-bold pb-5 text-gold drop-shadow-lg'>
        {data[id].date}
      </p>

        <p className='container mx-auto w-3/4 text-green text-center pb-10'>
         {data[id].text}
      </p>

        <p className='ml-40 text-left font-bold text-xl pb-5 '>
      Comments
    </p>



      </section>


      <Footer />
    </>
  )
}
