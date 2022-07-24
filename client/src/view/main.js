import React, { useState, useEffect, useContext } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Item from "../Components/Item";
import Sidebar from "../Components/Sidebar";
import axios from "axios";
import { Context } from "../context/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "../Components/Container";
import { useNavigate } from "react-router-dom";
import {apiUrl} from '../utils';

export default function Main() {
  const [data, setData] = useState([]);
  const { token, logout } = useContext(Context);
  const [whenToUpdate, setwhenToUpdate] = useState(0);
  const navigate = useNavigate();
  const headers = {
    authorization: `Bearer ${token}`,
  };
  //Delete POST
  function deletePost(id) {
    axios
      .delete(`${apiUrl}/posts/delete-post/${id}`, {
        headers,
      })
      .then((res) => {
        if (res.status === 200) {
          setwhenToUpdate(whenToUpdate + 1);
          toast.success("Post deleted");
        }
      })
      .catch((e) => {
        if (e.response.status === 403) {
          logout();
          toast.error(
            "Your session has been expired you will be redirect to the login page"
          );
          setTimeout(() => {
            navigate("/");
          }, "5000");
        }
      });
  }

  useEffect(() => {
    axios.get(`${apiUrl}/posts/`).then((res) => setData(res.data));
  }, [whenToUpdate]);

  return (
    <>
      <Container>
        <ToastContainer />
        <Header />
        <Sidebar />
        <section className="pb-20 pt-10 font-serif bg-bege flex flex-wrap justify-around m-auto ">
          {data.length > 0 ? (
            data.map((b, i) => (
              <Item
                id={b.post_id}
                img={b.img_url}
                key={i}
                handleDelete={deletePost}
                title={b.title}
                text={b.text}
                subText={b.subText}
                date={b.date}
              />
            ))
          ) : (
            <h3 className="my-80 text-2xl ">No posts yet</h3>
          )}
        </section>
      </Container>
      <Footer />
    </>
  );
}
