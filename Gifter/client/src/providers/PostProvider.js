import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);
  
  const getAllPosts = () => {
    return fetch("api/post")
      .then((res) => res.json())
      .then(setPosts);
  };

  const addPost = (post) => {
    return fetch("api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  };

  const searchPosts = (q) => {
    if (!q) {
      return getAllPosts();
    }

    return fetch(`api/post/search?q=${q}&sortDesc=true`)
      .then((res) => res.json())
      .then(setPosts);
  };

  return (
    <PostContext.Provider value={{ posts, getAllPosts, addPost, searchPosts }}>
      {props.children}
    </PostContext.Provider>
  );
};