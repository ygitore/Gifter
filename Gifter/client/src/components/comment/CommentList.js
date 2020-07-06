import React, { useContext, useEffect, useRef } from "react";
import { CommentContext } from "../../providers/CommentProvider";
import {Comment} from "./Comment";

export const CommentList = () => {
    const { comments, addComment, getAllComments } = useContext(CommentContext);

    const userProfileId = useRef()
    const postId = useRef()
    const message = useRef()

    const addNewComment = () => {
        addComment({
            userProfileId: parseInt(userProfileId),
            postId: parseInt(postId),
            message: message
        })    
    }
    
    useEffect(() => {
        getAllComments();
    }, []);

    return (
        <>
            <div>
                <input type = "text" placeholder = "user profile id" ref = {userProfileId} />
                <input type = "text" placeholder = "user post id" ref = {postId} />
                <input type = "text" placeholder = "message" ref = {message}/>
                <button onClick = {
                    (e) => { 
                        e.preventDefault()
                        addNewComment();
                                            
                }}>Submit comment</button>
            </div>
            <div>
                {
                    comments.map((comment) => (
                        <Comment key={comment.id} comment={comment} />
                    ))
                }
            </div>
        </>
    );
};