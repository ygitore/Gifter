import React, {useContext, useState} from 'react'
import {PostContext} from '../../providers/PostProvider'

export const PostDetails = () => {
    const {getPost} = useContext(PostContext)
    const [post, setPost] = useState([])
    return(
        <div>
            {getPost.title}
        </div>
    )
}