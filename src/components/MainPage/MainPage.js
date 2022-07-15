import React from "react";
import "./mainpage.css";
import UserCard from "../UserCard/UserCard";
import Post from "../post/Post.js";
import PostNav from "../postNav/PostNav";
import AddPost from "../post/AddPost";

const MainPage = ({ showCard, userIn, posts, addP, unPost, isNotAddPost }) => {
  const printPosts = (posts) => {
    var x = { author: "", topic: "", body: "", postID: "" };
    for (var i = 0; i < posts.length; i++) {
      x.postID = posts[i].postID;
      console.log(x.postID);
    }
  };

  return (
    <div className={`mainpage ${showCard ? "mainpage--show" : ""}`}>
      <div className="cardCont">
        <UserCard userIn={userIn} />
      </div>
      <div className="postviewer">
        <button onClick={unPost} style={{ alignSelf: "center" }}>
          {" "}
          Add Post
        </button>
        <AddPost isNotAddPost={isNotAddPost} addP={addP}/>
        <span className="postviewerTitle">Posts Viewer</span>
        <div className="postGenerator">
          {posts.map((post) => (
            <Post
              key={post.postID}
              likes={posts.likes}
              topic={posts.topic}
              body={posts.body}
              author={posts.author}
              post={post}
            />
          ))}
          {/* {console.log(posts)} */}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
