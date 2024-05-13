import React from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';




const Demo = (props) => {
  const { image, title, language, rating , theme} = props;
  return (
    <Link to={`/booking?image=${image}&title=${title}&language=${language}&rating=${rating}&theme=${theme}`} >
    <div style={{width:'300px' , height:'500px', marginTop:'15px', marginLeft:'15px', marginBottom:'15px'}} className='bg-gray-300 transition-transform duration-300 transform hover:scale-105'>
      <img src={props.image} alt='' style={{width:'300px', height:'400px'}} />
      <div style={{padding:'5px ', marginLeft:'5px'}}>
        <div ><h2 style={{fontFamily:'sans-serif',fontSize:'20px',fontWeight:'500',marginTop:'10px' , marginBottom:'5px'}}>{props.title}</h2></div>
        

        <div style={{fontSize:'12px' , marginBottom:'5px'}}>U/A . {props.language}</div>
          
        <div style={{marginTop:'1px', fontSize:'15px'}} 
        className='flex flex-cols'>
        Rating
          <p className=" left-5 text-2xl rounded-full p-1  text-gray-800 text-base #fcd34d">
          < FaStar />
          </p>&nbsp;
          <span> <h6 style={{padding:'1px',marginTop:'0px'}} >{props.rating}/10</h6></span>
          
        </div>
          
      </div>
    </div>
    </Link>
  )
}

export default Demo