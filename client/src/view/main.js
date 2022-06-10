import React, { useState, useEffect } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Item from '../Components/Item'
import Sidebar from '../Components/Sidebar'
import axios from 'axios'

export default function Main() { 
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:4000/posts/").then((res) => setData(res.data))
  }, []);
  return (
    <div>
      <Header />
      <Sidebar />
      <section className='container font-serif bg-bege flex flex-wrap justify-around m-auto '>
        {
          data?.map((b, i) => (
            <Item id={b.post_id} img={b.img_url} key={i} title={b.title} text={b.text} subText={b.subText} date={b.date} />
          ))
        }
      </section>
      <Footer />
    </div>
  )
}
