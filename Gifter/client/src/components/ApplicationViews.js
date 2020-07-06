import React from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./post/PostList";
import {PostForm} from "./post/PostForm";
import {PostDetails} from "./post/PostDetails";

const ApplicationViews = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <PostList />
      </Route>

      <Route path="/posts/add">
        <PostForm />
      </Route>

      <Route path="/posts/:id">
          <PostDetails />
      </Route>
    </Switch>
  );
};

export default ApplicationViews;