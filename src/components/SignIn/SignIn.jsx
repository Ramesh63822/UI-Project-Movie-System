import React from 'react'
import './Signin.css'

const Signin = () => {
  return (
    <div className='container'>

        <h1 className='bg-slate-700'>Sign in</h1>
        < hr className='horizontal' />
        <div className='content'>
        <div className='input'>
            <label for="email"> <h2>Email Id</h2> </label>
            <input type="email" placeholder='Enter registered email id' />
        </div>
        <div className='input'>
            <label for="password"> <h2>Password</h2> </label>
            <input type="password" placeholder='Enter password' />
        </div>
        <center>
        <button>Sign in</button>
        </center>
        </div>
        <hr />

<h6>Create a New account, Click here -  </h6>
        

        
    </div>
  )
}

export default Signin