import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import img from '../img/bg.png'
import { useParams } from "react-router-dom";
import { data } from '../bd';
import Comment from '../Components/Comment';
import { comments } from '../comments';

export default function ItemPreview() {
  let { id } = useParams();
  // console.log(id);
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
{
  comments.map((c,i) => {  
    if (c.postID === +id){
    return <Comment name={c.name} id={c.id} date={c.date} text={c.text} postID={c.postID} key={i} />
    }
  }
 )
}

        <p className='ml-40 text-left font-bold text-xl'>
          Add comments
        </p>

        <form className="rounded ml-40 w-1/4">
          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name"/>
          </div>
          <div>
            <textarea className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="Comment"/>
          </div>
          <div className="flex items-center justify-between pb-5">
            <button className="bg-gold hover:bg-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Submit
            </button>
          </div>
        </form>



      </section>


      <Footer />
    </>
  )
}
