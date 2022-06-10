import React, { useState, useContext } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { Context } from '../context/context';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const auth = useContext(Context)
  const [formValue, setformValue] = useState({
    email: 'mpopadiuk13@gmail.com',
    password: 'password',
  })
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValue.email === '') {
      toast.error("Please enter your email!");
      return false
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formValue.email)) {
      toast.error("Invalid email!");

      return false
    }

    if (formValue.password === '') {
      toast.error("Please enter you password!");

      return false
    } 

    axios.post('http://localhost:4000/api/login/', formValue )
      .then(function (response) { 
        console.log(response.data);
        auth.login(response.data);
        navigate('/')

        setformValue({
          email: '',
          password: '',
        })
        toast.success("success!");
      })
      .catch(function (error) {
        toast.error(error.message);
        return false
      });
  }


  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

  return (
    <>
      <Header />
      <ToastContainer position="top-left" />

      <div className='container mx-auto font-serif bg-additem text-5xl font-bold text-green tracking-normal text-center h-screen'>
        <div className='container p-20'>
          MERN App
        </div>

        <div>
          Are you Admin?
        </div>

        <div className="container  mx-auto p-6 mt-10  max-w-sm text-3xl text-left ">
          <form >
            <div className=" form-group mb-6 ">
              <label className="text-left form-label mb-2 text-green">Email*</label>
              <input name={'email'} value={formValue.email} onChange={handleChange} type="email" className="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter your email" />
            </div>

            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-green">Password*</label>
              <input name={'password'} value={formValue.password} onChange={handleChange} type="password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
            </div>
            <div className='text-center'>
              <button onClick={(e) => handleSubmit(e)} type="submit" className="px-6 py-2.5 bg-green text-white font-bold text-sm leading-tight tracking-wider uppercase rounded shadow-md hover:bg-gold hover:shadow-lg focus:bg-gold focus:shadow-lg  active:bg-gold active:shadow-lg transition duration-150 ease-in-out">Login</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}
