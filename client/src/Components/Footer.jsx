import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
      <footer className='container font-serif px-6 bg-green flex mx-auto p-2 flex-wrap justify-between '>
        <div className='text-2xl text-gold ml-10'>
        <Link to="/">MERN</Link >
        </div>

        <span className='text-base text-white flex items-center'>
          &copy; Copyright 2022
          </span>
          
        <div className='flex items-center text-gold text-2xl'>
          <a href="https://www.instagram.com/popadiukmaria/" className='pr-3'><FaInstagram />  </a >
          <a href="#" className='pr-3'><FaTwitter /></a >
          <a href="https://github.com/mariapopadiuk" className='mr-10'><FaGithub /></a >
        </div>
      </footer>
  )
}
