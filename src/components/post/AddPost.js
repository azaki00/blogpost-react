import React from "react";
import { useState } from "react";
import "./addpost.css";

const AddPost = ({ isNotAddPost, addP }) => {
  const [body, setBody] = useState("");
  const [topic, setTopic] = useState("");

  const meow = (e) => {
    e.preventDefault();
    if (topic != "" && body != "") {
      addP(topic, body );
      setBody("");
      setTopic("");
      
    }
    // alert("You cant add a post with an empty field!");
    // setBody("");
    // setTopic("");
  };

  return (
    <div className={`addpost ${isNotAddPost ? "addpost--show" : ""}`}>
      <form>
        <label>Topic</label>
        <br />
        <input value={topic} onChange={(e) => setTopic(e.target.value)}></input>
        <br />
        <label>Body</label>
        <br />
        <textarea className="bodyinput" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <br /><br />
        <button className="btnn" onClick={meow} >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
