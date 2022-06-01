import React from 'react';
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import img from '../img/bgitem.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function AddItem() {
  return (
    <> 
      
      <Header />
      <div className='container mx-auto font-serif bg-bgitem text-5xl font-bold text-green tracking-normal text-center h-screen'>
        <div className='container p-20'>
          Add Blog
        </div>
        <ToastContainer position="top-left" />


        <div className="container  mx-auto p-6 mt-10  max-w-sm text-3xl text-left ">
          <form >
            <div className=" form-group mb-6 ">
              <label className="text-left form-label mb-2 text-green">Email*</label>
              <input /*name={'email'} value={formValue.email} onChange={handleChange} */ type="email" className="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter your email" />
            </div>

            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-green">Password*</label>
              <input /*name={'password'} value={formValue.password} onChange={handleChange}*/ type="password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
            </div>
            <div className='text-center'>
              <button /*onClick={(e) => handleSubmit(e)} */type="submit" className="px-6 py-2.5 bg-green text-white font-bold text-sm leading-tight tracking-wider uppercase rounded shadow-md hover:bg-gold hover:shadow-lg focus:bg-gold focus:shadow-lg  active:bg-gold active:shadow-lg transition duration-150 ease-in-out">Login</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      
      </>
  )
}
