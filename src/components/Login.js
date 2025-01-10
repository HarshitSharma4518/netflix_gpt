import React from 'react'
import Header from './header';
import { useState } from 'react';
const Login = () => {
    const [isSignInForm,setIsSignInForm]= useState();
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    };
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img
      src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_medium.jpg"
      alt="logo"
      />
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
       <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In":"Sign Up"} </h1>
        <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
       {!isSignInForm && ( <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>)}
        <input type='password' placeholder='password' className='p-4 my-4 w-full bg-gray-700'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In":"Sign Up"}</button>
 
<p className='py-4 ' onClick={toggleSignInForm}> {isSignInForm? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>

      </form>
     
    </div>
  );
};


export default Login;
