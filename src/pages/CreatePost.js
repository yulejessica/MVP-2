import React from "react";
import { useState, useEffect } from "react";
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from "react-router-dom";

function CreatePost({isAuth}) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postCollectionRef,
      { title, postText, author: {
      name:auth.currentUser.displayName , id:auth.currentUser.uid
    } });
    navigate('/');
  }

  useEffect(() => {
    if(!isAuth) {
      navigate('/login');
    }
  }, []);

  return (
  <div className="createPostPage">
    Post
    <div className="cpContainer">
      <h1> create a post</h1>
      <div className="inputGp">
        <lable>Title: </lable>
        <input placeholder="Title..." onChange={(e) => setTitle(e.target.value)}/>
      </div>

      <div className="inputGp">
        <lable>Post: </lable>
        <textarea placeholder="Post..." onChange={(e) => setPostText(e.target.value)}/>
      </div>
      <button onClick={createPost}>Submit Post</button>
    </div>
  </div>)
}

export default CreatePost;