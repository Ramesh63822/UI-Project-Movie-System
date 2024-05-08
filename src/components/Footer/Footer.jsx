import React from 'react';
import { PiPhoneCallFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto flex  justify-center items-center">
        <div>
            
                
                <h1 className='flex flex-cols mt-10'>Contact Us</h1>
            <p ><PiPhoneCallFill /> +1234567890</p>
            <p> rmovies@gmail.com</p>
            <p>&copy; {new Date().getFullYear()} R-Movies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;