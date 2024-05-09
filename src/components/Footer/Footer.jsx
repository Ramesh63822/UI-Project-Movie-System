import React from 'react';
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import './Footer.css'



const Footer = (props) => {
  return (
    <div className={`footer ${props.theme}`} >
      <h1 className={`contactus ${props.theme} flex  flex-cols mt-5  mb-[40px] align-center justify-center`}>Contact Us</h1>
    <footer className='grid grid-cols-2 '>
      <div className=" mt-5 mb-10  grid grid-cols-2">
        <div>                        
               
                <div className='ml-[150px]'>
                <p className='flex flex-cols'>
              <span className='p-1'><PiPhoneCallFill /> </span>.   +917685849543</p>
            <p className='flex flex-cols mt-[5px]'><span className='p-1'> <MdEmail /> </span>.   rmovies@gmail.com</p>
            <input type="text" placeholder='Enter a message' style={{width:'250px', marginTop:'10px', height:'100px'}} />

                </div>
           
               
        </div>        
      </div>

      <div className='mt-[30px] mb-[100px] ml-[200px]'>
        <div  className='flex text-4xl space-x-4 '>
          <span className='transition-transform duration-300 transform hover:scale-150'>
          <FaFacebook />
          </span>
          <span className='transition-transform duration-300 transform hover:scale-150'>
          <FaSquareInstagram />
          </span>
          <span className='transition-transform duration-300 transform hover:scale-150'>
          <AiFillTwitterCircle />
          </span>  
          <span className='transition-transform duration-300 transform hover:scale-150'>
          <IoLogoYoutube />
          </span>  
        
        
        
        </div>

      </div>
    </footer>
    <p className='text-center'>
              <span className='p-1 '>&copy;</span>
               {new Date().getFullYear()} R-Movies</p>
  </div>
  );
};

export default Footer;