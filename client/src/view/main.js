import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Item from '../Components/Item'
import Sidebar from '../Components/Sidebar'
import { data } from '../bd'
import img from '../img/bgitem.jpg'

export default function Main () {
  // console.log(data)
  return (
    <div>
      <Header />
      <Sidebar />
      <section className='container font-serif bg-bege flex flex-wrap justify-around m-auto '>

{
  data.map((b, i) => (
    <Item id={b.id} img={img} key={i} title={b.title} text={b.text} subText={b.subText} date={b.date}/>
  ))
}
      </section> 
      <Footer />
    </div>
  )
}
