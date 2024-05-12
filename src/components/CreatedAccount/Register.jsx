import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = ({theme}) => {
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
   
    if (!username.trim()) {
      errors.username = '*username is required';
    }else if(username.trim().length < 5){
        errors.username = '*username must be aleast greater than 5 characters';
    }else if(username.trim().length >15){
        errors.username = '*username must be aleast lesser than 15 characters'
    }else if(!/^[a-zA-Z]*$/.test(username.trim())){
        errors.username = '*username must be Alphabets'
    }


    if (!mobileNumber.trim()) {
      errors.mobileNumber = '*mobile number is required';
    }else if(mobileNumber.trim().length >= 10 ){
      errors.mobileNumber = '*mobile number must be 10 digits'
    }else if (!/^\d+$/.test(mobileNumber.trim())) {
      errors.mobileNumber = '*mobile number must contain only digits';
    }

    if (!email.trim()) {
      errors.email = '*email is required';
    } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email.trim())) {
      errors.email = '*email is invalid';
    }

    if (!password.trim()) {
      errors.password = '*password is required';
    } else if (password.trim().length < 8) {
      errors.password = '*password must be at least 8 characters long';
    }

    if(!confirmPassword.trim()){
      errors.confirmPassword = '*re-enter your password'
    }else if (password !== confirmPassword) {
      errors.confirmPassword = '*passwords do not match';
    }

    if (Object.keys(errors).length === 0) {
      // Proceed with registration
      console.log('Registration successful:', { username, mobileNumber, email, password });
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className={`register ${theme}`} >
      <h1 className='bg-slate-700'>Create Account</h1>
      <hr className='horizontal' />
      <div className='content'>
        <form onSubmit={handleSubmit}>
          <div className='input'>
            <label htmlFor="name"> <h2>Username</h2> </label>
            <input type="text" id='name' placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)} />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>

          <div className='input'>
            <label htmlFor="mobilenumber"> <h2>Mobile Number</h2> </label>
            <input type="text" id='mobilenumber' placeholder='Enter mobile number' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
            {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
          </div>

          <div className='input'>
            <label htmlFor="email"> <h2>Email Id</h2> </label>
            <input type="email" id='email' placeholder='Enter registered email id' value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className='input'>
            <label htmlFor="password"> <h2>Password</h2> </label>
            <input type="password" id='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className='input'>
            <label htmlFor="confirmpassword"> <h2>Confirm Password</h2> </label>
            <input type="password" id='confirmpassword' placeholder='Re-enter password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          </div>

          <center>
            <button type="submit">Register Now</button>
          </center>
        </form>
      </div>
      <hr />
      <h6> Click here - <span className='text'><Link to='/signin'>Sign in</Link></span> </h6>
    </div>
  );
};

export default Register;