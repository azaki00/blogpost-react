import React from 'react'
import './signup.css'
import { useState } from 'react'

const Signup = ({isNotSigned,signS,unlog,unSign}) => {

    const [mailSign, setMailSign] = useState("")
    const [passSign, setPassSign] = useState("")

    const enterS=(e) =>{
        e.preventDefault();
        console.log("clicked Signup");
        signS(mailSign, passSign);
    }

    const doUnsign=(e)=>{
      e.preventDefault();
      console.log("clicked to go back to log in");
      unSign();
      unlog();
    }


  return (
    <form className={`signup ${isNotSigned ? "signup--show" : ""}`}>
        <div>
          <article className='art1'>First time at blogpost?</article><br /><br />
            <span>Sign Up</span><br/>
            <article className='art2'>Create your new user here</article>
            <article>↓</article>
        </div>
        <br/>
        <label>Email:</label>
        <input type="text" placeholder="example@example.com..." onChange={(e) => setMailSign(e.target.value)}/><br/>
        <label>Password: </label>
        <input type="text" placeholder='pass123...' onChange={(e) => setPassSign(e.target.value)}/><br/>
        <button className='btn1' onClick={enterS}>Sign up</button>
        <br />
        <button className='btn2' onClick={doUnsign}>Go Back To Log In</button>
    </form>  
  )
}

export default Signup