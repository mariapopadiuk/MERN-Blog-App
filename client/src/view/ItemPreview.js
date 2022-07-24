import React, { useState, useContext, useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import Comment from "../Components/Comment";
import { FaCheck, FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../context/context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { apiUrl } from '../utils';

export default function ItemPreview() {
  let { id } = useParams();
  const { isAuthenticated, token, logout } = useContext(Context);
  const [postEditable, setPostEditable] = useState(false);
  const [data, setData] = useState(null);
  const [comments, setComments] = useState(null);
  const [whenToUpdate, setwhenToUpdate] = useState(0);
  const navigate = useNavigate();
  const headers = {
    authorization: `Bearer ${token}`,
  };
  // Form Validation for comment
  const [formValue, setformValue] = useState({
    user_name: "",
    text: "",
    date_created: "",
    post_id: id,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValue.user_name === "") {
      toast.error("Please enter your Name!");
      return false;
    }
    if (formValue.text === "") {
      toast.error("Please enter you message!");
      return false;
    }
    //ADD COMMENT
    axios
      .post(`${apiUrl}/comments/add-comment/${id}`, formValue)
      .then(function () {
        setformValue({
          user_name: "",
          text: "",
        });
        setwhenToUpdate(whenToUpdate + 1);
        toast.success("Comment added!");
      })
      .catch(function (error) {
        toast.error(error.message);
        return false;
      });
  };

  const handleChange = (e) => {
    setformValue({
      ...formValue,
      [e.target.name]: e.target.value,
      date_created: new Date().toISOString().slice(0, 19).replace("T", " "),
      post_id: id,
    });
  };

  // UPDATE POST
  function updatePost() {
    const updatedTitle = document.querySelector(".post-title").innerText;
    const updatedText = document.querySelector(".post-text").innerText;

    if (updatedText.length === 0 || updatedTitle.length === 0) {
      toast.error("This field can't be empty");
      return false;
    }
    axios
      .patch(
        `${apiUrl}/posts/update-post/${id}`,
        {
          user_id: 2,
          title: updatedTitle,
          text: updatedText,
        },
        { headers }
      )
      .then((res) => {
        if (res.status === 200) {
          toast.success("Post updated");
          setPostEditable(false);
          setwhenToUpdate(whenToUpdate + 1);
        }
      })
      .catch((e) => {
        if (e.response.status === 403) {
          logout();
          toast.error(
            "Your sassion has been expired you will be redirect to the login page"
          );
          setTimeout(() => {
            navigate("/login");
          }, "5000");
        }
      });
  }

  // DELETE COMMENT
  function deleteComment(comentId) {
    axios
      .delete(`${apiUrl}/comments/delete-comment/`, {
        data: { comment_id: comentId },
        headers,
      })
      .then((res) => {
        if (res.status === 200) {
          setwhenToUpdate(whenToUpdate + 1);
          toast.success("Comment deleted");
        }
      })
      .catch((e) => {
        if (e.response.status === 403) {
          logout();
          toast.error(
            "Your sassion has been expired you will be redirect to the login page"
          );
          setTimeout(() => {
            navigate("/login");
          }, "5000");
        }
      });
  }

  // GET POST
  useEffect(() => {
    axios
      .get(`${apiUrl}/posts/${id}`)
      .then((res) => setData(res.data[0]));
  });

  // GET COMMENTS
  useEffect(() => {
    axios
      .get(`${apiUrl}/comments/${id}`)
      .then((res) => setComments(res.data));
  }, [whenToUpdate]);

  return (
    <>
      <Header />
      <ToastContainer position="top-left" />
      <section className="container font-serif mx-auto bg-bege tracking-wide">
        <div>
          <img src={data?.img_url} className="w-3/4 m-auto p-10" />
        </div>
        <div className="text-center text-4xl mb-3">
          {isAuthenticated &&
            (postEditable ? (
              <FaCheck
                onClick={updatePost}
                className="m-auto inline text-gold hover:text-green transition cursor-pointer"
              />
            ) : (
              <FaEdit
                onClick={() => setPostEditable(true)}
                className="m-auto inline text-gold hover:text-red-600 transition cursor-pointer"
              />
            ))}
        </div>
        <h1
          className={
            (postEditable && "border") +
            " post-title border-red-600 text-green text-center text-4xl pb-5 font-semibold"
          }
          contentEditable={postEditable}
          suppressContentEditableWarning={true}
        >
          {data?.title}&nbsp;
        </h1>
        <p className="text-center font-bold pb-5 text-gold drop-shadow-lg">
          {moment(data?.date).format("lll", "pt")}
        </p>
        <p
          className={
            (postEditable && "border") +
            " post-text border-red-600 p-3 container mx-auto w-3/4 text-green text-center pb-10"
          }
          focus="true"
          contentEditable={postEditable}
          suppressContentEditableWarning={true}
        >
          {data?.text}
        </p>

        <p className="ml-40 text-left font-bold text-xl pb-5 ">Comments</p>
        {comments?.map((c, i) => (
          <Comment
            useEffDep={formValue}
            name={c.user_name}
            id={c.comment_id}
            date={c.date_created}
            text={c.text}
            postID={c.postID}
            key={i}
            handleDeleteComment={deleteComment}
          />
        ))}
        <p className="ml-40 text-left font-bold text-xl">Add comments</p>
        <form className="rounded ml-40 w-1/4">
          <div className="mb-4">
            <input
              name={"user_name"}
              value={formValue.user_name}
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div>
            <textarea
              name={"text"}
              value={formValue.text}
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="text"
              type="text"
              placeholder="Comment"
            />
          </div>
          <div className="flex items-center justify-between pb-5">
            <button
              onClick={(e) => handleSubmit(e)}
              className="bg-gold hover:bg-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}
