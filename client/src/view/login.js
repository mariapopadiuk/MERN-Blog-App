import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

export default function Login() {
  return (
    <>
    <Header />
      <div className='container mx-auto font-serif bg-bgImageLogin text-5xl font-bold text-green tracking-normal text-center h-screen'>
      <div className='container p-20'>
     MERN App
      </div>
     
      <div>
     Are you Admin?
      </div>

        <div class="container  mx-auto p-6 mt-10  max-w-sm text-3xl text-left ">
        <form>
          <div class=" form-group mb-6 ">
            <label for="exampleInputEmail1" class="text-left form-label mb-2 text-green">Name*</label>
            <input type="email" class="form-control
       
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
    placeholder="Enter your name"/>
             
          </div>
          <div class="form-group mb-6">
            <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-green">Password*</label>
            <input type="password" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"/>
          </div>
    
    <div className='text-center'> 
          <button  type="submit" class="
      px-6
      py-2.5
      bg-green
      text-white
      font-bold
      text-sm
      leading-tight
      tracking-wider
      uppercase
      rounded
      shadow-md
      hover:bg-gold hover:shadow-lg
      focus:bg-gold focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-gold active:shadow-lg
      transition
      duration-150
      ease-in-out">Login</button>
          </div>
        </form>
      </div>
    </div>
<Footer />
    </>
  )
}
