import React from "react";
import "./post.css";
import { FaUser } from "react-icons/fa";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="div1">
       <h4> Author: {post.author} </h4> <span className="ID">Post ID: {post.postID}</span>
      </div>
      <div className="div2">
        <span> {post.topic}</span>
        <p> {post.body}</p>
        <div className="likes">
          <FaUser></FaUser>
          <p>{post.likes}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
