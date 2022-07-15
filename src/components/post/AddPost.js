import React from "react";
import { useState } from "react";
import "./addpost.css";

const AddPost = ({ isNotAddPost, addP }) => {
  const [body, setBody] = useState("");
  const [topic, setTopic] = useState("");

  const meow = (e) => {
    e.preventDefault();
    alert("!!!!!!");
    if (topic != "" && body != "") {
      alert("onsubmt inside!");
      addP(topic, body );
      alert("onsubmt inside out!");
      setBody("");
      setTopic("");
      return
    }
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
        <input value={body} onChange={(e) => setBody(e.target.value)}></input>
        <br />
        <button className="btnn" onClick={meow} >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
