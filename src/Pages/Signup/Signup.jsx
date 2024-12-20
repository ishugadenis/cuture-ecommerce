import './Signup.css';
import signImage from '../../assets/dl.beatsnoop 1.png';
import { useState } from 'react';

const Signup = () => {
  const [isLogin, SetisLogin]= useState(true);

  const switchSubmit = () =>{
    SetisLogin(!isLogin)
  }

  return (
    <section className='login'>
      <img src={signImage} alt="" />
      <div className="login-box">
        <h4>{isLogin ? "Login To Cultures":"Create an account"}</h4>
        <p>Enter you details below</p>
        <form action="POST">
        <div className="user-box">
         <input type="text" name="" placeholder="" required="" id='name'/>
         <label>Username</label>
        </div>
        {isLogin ? <></> :
        <div className="user-box">
         <input type="text" name="" required="" placeholder='' id='name'></input>
         <label>Email or Phone number</label>
        </div>
        }   
        <div className="user-box">
         <input type="text" name="" required="" placeholder='' id='name'></input>
         <label>Password</label>
        </div>
          <button className='red-button'>{isLogin ? "Log in" : "Create Account"}</button>
          <button className='action-button'>Sign up with Google</button>
        </form>
        {isLogin ?
        <i>Forgot Password ?</i>: <></>}
        <p className='redirect'>{isLogin ? "Don't have an account ?": "Already have account ?"} <span className='login-btn' onClick={switchSubmit}>{isLogin ? "Sign up": "Log in"} </span></p>
      </div>
    </section>
  )
}

export default Signup