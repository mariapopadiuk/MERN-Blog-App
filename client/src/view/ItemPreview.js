import React, { useState, useContext, useEffect } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { useParams } from "react-router-dom";
import { data } from '../bd';
import Comment from '../Components/Comment';
import { comments } from '../comments';
import img from '../img/bgitem.jpg'
import { FaCheck, FaEdit } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from '../context/context';
import axios from 'axios';



export default function ItemPreview() {
  let { id } = useParams();
  const { isAuthenticated} = useContext(Context);  
  const [titleEditable, setTitleEditable] = useState(false);
  const [textEditable, setTextEditable] = useState(false);

// Form Validation for comment
  const [formValue, setformValue] = useState({
    username: '',
    text: '',
  })
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValue.username === '') {
      toast.error("Please enter your Name!");
      return false
    }
    if (formValue.text === '') {
      toast.error("Please enter you message!");

      return false
    }

    setformValue({
      username: '',
      text: '',
    })

    toast.success("Comment added! Thank you");
  }

  const handleChange = (event) => {
    // console.log(2345);
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }


  
  const [data, setData] = useState(null);
  useEffect(() => {
  axios.get(`http://localhost:4000/posts/${id}`).then((res) => setData(res.data[0]))
  }, []);
  console.log(data);
   

  return (
    <>
      <Header />
      <ToastContainer position="top-left" />

      <section className='container font-serif mx-auto bg-bege tracking-wide'>

        <div>
          <img src={data?.img_url} className="w-3/4 m-auto p-10" />
        </div>

        <h1 className={(titleEditable && 'border') + ' border-red-600 text-green text-center text-4xl pb-5 font-semibold'} contentEditable={titleEditable} >
          {data?.title}&nbsp;

          {
            isAuthenticated &&
            (titleEditable
              ? <FaCheck onClick={() => setTitleEditable(false)} className='m-auto inline text-gold hover:text-green transition cursor-pointer' />
              : <FaEdit onClick={() => setTitleEditable(true)} className='m-auto inline text-gold hover:text-red-600 transition cursor-pointer' />
            )
          }
        </h1>


        <p className='text-center font-bold pb-5 text-gold drop-shadow-lg'>
          {data?.date}
        </p>

        <p className={(textEditable && 'border') + ' border-red-600 p-3 container mx-auto w-3/4 text-green text-center pb-10'} focus="true" contentEditable={textEditable}  >
          {data?.text}
          {
            isAuthenticated &&
            (textEditable
              ? <FaCheck onClick={() => setTextEditable(false)} className='m-auto text-4xl text-gold hover:text-green transition cursor-pointer' />
              : <FaEdit onClick={() => setTextEditable(true)} className='m-auto text-4xl text-gold hover:text-red-600 transition cursor-pointer' />
            )
          }
        </p>
           

        <p className='ml-40 text-left font-bold text-xl pb-5 '>
          Comments
        </p>
        {
          comments.map((c, i) => {
            if (c.postID === +id) {
              return <Comment isadmin={isAuthenticated
}  name={c.name} id={c.id} date={c.date} text={c.text} postID={c.postID} key={i} />
            }
          }
          )
        }

        <p className='ml-40 text-left font-bold text-xl'>
          Add comments
        </p>

        <form className="rounded ml-40 w-1/4">
          <div className="mb-4">
            <input name={'username'} value={formValue.username} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
          </div>
          <div>
            <textarea name={'text'} value={formValue.text} onChange={handleChange} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="Comment" />
          </div>
          <div className="flex items-center justify-between pb-5">
            <button onClick={(e) => handleSubmit(e)} className="bg-gold hover:bg-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Submit
            </button>
          </div>
        </form>



      </section>


      <Footer />
    </>
  )
}
