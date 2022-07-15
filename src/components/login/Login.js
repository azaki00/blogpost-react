import React from "react";
import "./login.css";
import { useState } from "react";

const Login = ({ logg, unlog, isNotLogged, unSign }) => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const enter = (e) => {
    e.preventDefault();
    console.log("clicked Log in");
    logg(mail, pass);
    setMail("");
    setPass("");
  };

  const promptSign = (e) => {
    e.preventDefault();
    console.log("clicked to sign up");
    unlog();
    unSign();
  };

  return (
    <div className={`login ? ${isNotLogged ? "login--show" : ""}`}>
      
      <form className="form">
        <br />
        <article>Log into your account</article>
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder="user@gmail.com..."
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="text"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="pass123..."
        />
        <br />
        <button onClick={enter}>Log In</button>
        <br />
        <br />
        <fieldset>
          <legend>Not a user?</legend>
          <button onClick={promptSign}>Sign Up</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
