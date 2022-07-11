import React from 'react'
import './login.css'
import { useState } from 'react'
const Login = ({logg,unlog,isNotLogged, promptSign}) => {

    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")

    const enter=(e) =>{
        e.preventDefault();
        console.log("clicked");
        logg(mail, pass);
    }
    // e.preventDefault
  return (
    <div className={`login ? ${isNotLogged ? "login--show" : ""}`}>
        <span>Welcome to the Blogpost</span>
        <form className='form'><br/>
            <label>Email</label><br/>
            <input type="email"  value={mail} onChange={(e) => setMail(e.target.value)}  placeholder="user@gmail.com..."/><br/>
            <label>Password</label><br/>
            <input type="text"  value={pass} onChange={(e) => setPass(e.target.value)}  placeholder="pass123..."/><br/>
            <button onClick={enter}>Submit</button><br/><br/>
            <fieldset>
              <legend>Not a user?</legend>
              <button onClick={promptSign}>Sign Up</button>
            </fieldset>
        </form>
    </div>
  )
}

export default Login;