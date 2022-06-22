import React from "react";
import { useState, useEffect } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase-config';


function Home({isAuth}) {
  const [postLists, setPostLists] = useState([]);
  const postCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);
  }
  useEffect(() => {
    const getPosts= async () => {
      const data = await getDocs(postCollectionRef);
      setPostLists(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }
    getPosts();
  })


  return <div className="homePage">{postLists.map((p) => {
    return (
     <div className="post">
           <div className="postHeader">
            <div className="title">
              <h1>{p.title}</h1>
              </div>
              <div className="deletePost">
               {isAuth && p.author.id === auth.currentUser.uid &&
                <button onClick={() => {deletePost(p.id)}}>Delete</button> }
              </div>
            </div>
            <div className="postTextContainer">{p.postText} </div>
            <h3>@{p.author.name}</h3>
     </div>

      )
  })}</div>
}

export default Home;