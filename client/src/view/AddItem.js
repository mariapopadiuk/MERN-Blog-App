import React, { useState, useContext } from 'react';
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { Context } from '../context/context';
import { useNavigate } from "react-router-dom";

export default function AddItem() {

  const auth = useContext(Context)
  const { token } = useContext(Context);
  //const [whenToUpdate, setwhenToUpdate] = useState(0);
  const headers = {
    'authorization': `Bearer ${token}`
  };
  const navigate = useNavigate();

  //Validation form
  const [formValue, setformValue] = useState({
    user_id: '',
    img_url: '',
    title: '',
    text: '',
    date_created: ''
  })
  const handleSubmit = (event) => {
    event.preventDefault();

    if (formValue.img_url === '') {
      toast.error("Please provide post image url!");
      return false
    }

    if (formValue.title === '') {
      toast.error("Please enter post title!");

      return false
    }

    if (formValue.text === '') {
      toast.error("Please enter post text!");

      return false
    }

    axios.post('http://localhost:4000/posts/add-post',

        formValue,
        {headers}
      
    )
      .then(function (response) {
        navigate('/')

        setformValue({
          user_id: '',
          img_url: '',
          title: '',
          text: '',
          date_created: ''
        })
        toast.success("Post added!");

      })
      .catch(function (error) {
        toast.error(error.message);
        return false
      });

  }
  //clean form
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
      date_created: new Date().toISOString().slice(0, 19).replace('T', ' '),
      user_id: '2'

    });
  }
  return (
    <>
      <Header />
      <ToastContainer position="top-left" />
      <div className='container mx-auto font-serif bg-additem text-5xl font-bold text-green tracking-normal text-center h-screen'>
        <div className='container p-20'>
          Add New Blog
        </div>

        <div className="container mx-auto max-w-sm text-3xl text-left ">
          <form >
            <div className=" form-group mb-6 ">

              <label htmlFor="text" className="text-left form-label mb-2 text-green">Image*</label>
              <input name='img_url' value={formValue.img_url} onChange={handleChange} className="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Provide image url" type="text" src="" alt=""></input>

              <label className="text-left form-label mb-2 text-green">Title*</label>
              <input name={'title'} value={formValue.title} onChange={handleChange} type="text" className="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter your title" />
            </div>

            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-green">Text*</label>
              <input name={'text'} value={formValue.text} onChange={handleChange} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter your content" />
            </div>
            <div className='text-center'>
              <button onClick={(e) => handleSubmit(e)} type="submit" className="px-6 py-2.5 bg-green text-white font-bold text-sm leading-tight tracking-wider uppercase rounded shadow-md hover:bg-gold hover:shadow-lg focus:bg-gold focus:shadow-lg  active:bg-gold active:shadow-lg transition duration-150 ease-in-out">Add</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />

    </>
  )
}
