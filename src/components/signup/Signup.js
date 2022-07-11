import React from 'react'
import './signup.css'
import { useState } from 'react'

const Signup = ({isNotSigned,signS}) => {

    const [mailSign, setMailSign] = useState("")
    const [passSign, setPassSign] = useState("")

    const enterS=(e) =>{
        e.preventDefault();
        console.log("clicked");
        signS(mailSign, passSign);
    }

  return (
    <form className={`signup ${isNotSigned ? "signup--show" : ""}`}>
        <div>
            <span>Sign Up</span><br/>
            <article>Create your new user here</article>
            <article>↓</article>
        </div>
        <br/>
        <label>Email:</label>
        <input type="text" onChange={(e) => setMailSign(e.target.value)}/><br/>
        <label>Password: </label>
        <input type="text" onChange={(e) => setPassSign(e.target.value)}/><br/>
        <button className='btn1' onClick={enterS}>Sign up</button>
        <br />
        <button className='btn2'>Go Back To Sign In</button>
    </form>  
  )
}

export default Signup