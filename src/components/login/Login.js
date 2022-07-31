import React from "react";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Login = ({ isNotSigned, unlog, isNotLogged, unSign, users, setUserIn}) => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/main', {replace: true}), [navigate]);

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

  const logg = (m, p) => {
    for (var i = 0; i < users?.length; i++) {
      if (users[i].mail == m && users[i].pass == p) {
        setUserIn({ mail: users[i].mail, pass: users[i].pass });
        alert("Succesfully logged in!");
        handleOnClick();
        if (isNotSigned) {
          unSign();
        }

        unlog();
        console.log(isNotLogged);

        return;
      }
    }
    alert("This user is not found! Please sign up!");
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
          required
          onChange={(e) => setMail(e.target.value)}
          placeholder="user@gmail.com..."
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          value={pass}
          required
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
