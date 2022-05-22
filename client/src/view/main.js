import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Item from '../Components/Item'
import Sidebar from '../Components/Sidebar'
import { data } from '../bd'


export default function Main () {
  // console.log(data)
  return (
    <>
      <Header />
      <Sidebar />

{
  data.map((b, i) => (
    <Item id={b.id} img={b.img} key={i} title={b.title} text={b.text} subText={b.subText} date={b.date}/>
  ))
}

      <Footer />
    </>
  )
}
