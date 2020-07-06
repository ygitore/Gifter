import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/post/PostList";
//import PostForm from "./components/post/PostForm";
import {CommentProvider} from './providers/CommentProvider'
import { CommentList } from "./components/comment/CommentList";


function App() {
  return (
    <div className="App">
      <CommentProvider>
        <CommentList />
      </CommentProvider>
      <PostProvider>
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;