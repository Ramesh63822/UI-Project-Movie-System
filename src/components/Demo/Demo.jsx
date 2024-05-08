import React from 'react'
import { FaStar } from "react-icons/fa";




const Demo = (props) => {
  return (
    <div style={{width:'300px' , height:'500px', marginTop:'15px', marginLeft:'15px', marginBottom:'15px', backgroundColor:'#5ae6ab'}} className='transition-transform duration-300 transform hover:scale-105'>
      <img src={props.image} alt='' style={{width:'300px', height:'400px'}} />
      <div style={{padding:'5px ', marginLeft:'5px'}}>
        <div ><h2 style={{fontFamily:'sans-serif',fontSize:'20px',fontWeight:'500',marginTop:'10px' , marginBottom:'5px'}}>{props.title}</h2></div>
        

        <div style={{fontSize:'12px' , marginBottom:'5px'}}>U/A . {props.language}</div>
        
        <div style={{marginTop:'1px', fontSize:'15px'}} 
        className='flex flex-cols'>
        Rating
          <p className=" left-5 text-2xl rounded-full p-1  text-gray-800 text-base ">
          < FaStar />
          </p>
          <h6 style={{padding:'1px'}}>{props.rating}/10</h6>
        </div>
          
      </div>
    </div>
  )
}

export default Demo