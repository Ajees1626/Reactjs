import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowlogin}) => {
  const [currentstate,setCurrentstate] =useState("login")
  return (
    <div className='login-popup'>
     <form className="login-popup-container">
      <div className="login-popup-title">
        <h2>{currentstate}</h2>
        <img onClick={() => setShowlogin(false)} src={assets.cross_icon} alt="" />
      </div>
      <div className="login-popup-input">
        {currentstate==="login"?<></>:<input type="text" placeholder='your name '  required/>}
        <input type="email" placeholder='your email' required/>
        <input type="password" placeholder='password' required/>
      </div>
      <button>{currentstate==="signup"?"create account":"login"}</button>
      <div className="login-popup-condition">
        <input type="checkbox" required/>
        <p>continue</p>
      </div>
      {currentstate==="login"
      ?<p>create a new account?<span onClick={()=>setCurrentstate("signup")}>Click here</span></p>
      :<p>Already have an account?<span onClick={()=>setCurrentstate("login")}>Login here</span></p>}
     </form>
    </div>
  )
}

export default LoginPopup
