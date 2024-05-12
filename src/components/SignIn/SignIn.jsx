import React, { useState } from 'react';
import '../CreatedAccount/Register.css'
import { Link } from 'react-router-dom'

const Signin = ({theme}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = '* Email is required';
    } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email.trim())) {
      newErrors.email = '* Email is invalid';
    }
  
    if (!password.trim()) {
      newErrors.password = '*password is required';
    } else if (password.trim().length < 8) {
      newErrors.password = '*password must be at least 8 characters long';
    }
  
    if (Object.keys(newErrors).length === 0) {
      // Proceed with sign-in
      console.log('Sign-in successful:', { email, password });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className={`register ${theme}`}>
      <h1 className='bg-slate-700'>Sign in</h1>
      <hr className='horizontal' />
      <div className='content'>
        <form onSubmit={handleSubmit}>
          <div className={`input `}>
            <label htmlFor="email"><h2>Email Id</h2></label>
            <input
              type="email"
              placeholder='Enter registered email id'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className='input'>
            <label htmlFor="password"><h2>Password</h2></label>
            <input
              type="password"
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <center>
            <button type="submit">Sign in</button>
          </center>
        </form>
      </div>
      <hr />
      <h6>Create a New account, Click here - <span className='text'><Link to='/register'>Register Now</Link></span></h6>
    </div>
  )
}

export default Signin