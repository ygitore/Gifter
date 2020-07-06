import React, { useState } from "react";


export const CommentContext = React.createContext();

export const CommentProvider = (props) => {

  const [comments, setComments] = useState([])

  console.log('---> ',comments)
    const getAllComments = () => {
        return fetch('api/comment')
                .then(res => res.json())
                .then(setComments)
    };
    const addComment = (comment) => {
      return fetch('api/comment', {
        Method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
      }).then(getAllComments)
    };
    const updateComment = (comment) => {
      return fetch(`api/comment/${comment.id}`,{
        Method:"PUT",
        headers:{
          "Content-Type": "application/json"
        }
        }).then(getAllComments)
    }
    const deleteComment = (commentId) => {
      return fetch(`api/comment/${commentId}`, {
        Method: "DELETE",
        body: {
          "Content-Type": "application/json"
        }
      }).then(getAllComments)
    }
    return (
        <CommentContext.Provider value={{ comments, addComment, updateComment, deleteComment, getAllComments }}>
          {props.children}
        </CommentContext.Provider>
      );
}