import React from 'react'
import { FaStar } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import './Bookingpage.css'
import { FaShareNodes } from "react-icons/fa6";
import { useState , useEffect} from 'react';

const BookingPage = () => { 
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const image = searchParams.get('image') || '';
    const title = searchParams.get('title') || '';
    const language = searchParams.get('language') || '';
    const rating = searchParams.get('rating') || '';
    const theme = searchParams.get('theme') || '';

    const [showAlert, setShowAlert] = useState(false);
    useEffect(() => {
        if (showAlert) {
          const timer = setTimeout(() => {
            setShowAlert(false);
          }, 3000);
    
          // Clear timeout if the component is unmounted or showAlert is set to false
          return () => clearTimeout(timer);
        }
      }, [showAlert]);
    const handleBookTickets = () => {
        setShowAlert(true);
      };

  return (
    <div style={{width:'90%' , height:'500px', marginTop:'30px', marginLeft:'60px', marginBottom:'30px'}} className={` booking  bg-gray-300 grid grid-cols-2`} >
      <div>
        <img src={image} alt='' style={{width:'400px', height:'500px'}} />
      </div>
      
      <div>
        <button className='sharebutton flex flex-cols p-2'>  <span className='p-1'><FaShareNodes /> </span> &nbsp; Share</button>

        <div className='note'>
            <div className='title'>
                <h2>{title}</h2>
            </div>        
  
            <div className='flex flex-cols rating'>
                Rating
                <p className=" left-5 text-2xl rounded-full p-2  text-gray-800 text-base #fcd34d">
                < FaStar />
                </p>&nbsp;
                <span> <h6 style={{padding:'1px',marginTop:'0px'}} >{rating}/10</h6></span>
            
            </div>

            <div style={{marginTop:'15px'}}>U/A . {language}</div>

            <div className='flex flex-cols'>
                <div style={{width:'30px', height:'30px', backgroundColor:'#E4C59E',padding:'4px', marginTop:'15px',fontWeight:"bold", marginRight:'10px'}} >
                    <span >
                    2D
                    </span>
                </div>

                
                <div style={{width:'30px', height:'30px', backgroundColor:'#E4C59E',padding:'4px', marginTop:'15px',fontWeight:"bold"}} >
                    <span >
                    3D
                    </span>
                </div>
            </div>

            <div style={{marginTop:'15px',}}>
            2h 38m • Drama, Family • U • 10 May, 2024
            </div>

            <button className='bookbutton' onClick={handleBookTickets}>Book Tickets</button>

            {showAlert && (
              <div style={{width:'500px', height:'75px', backgroundColor:'#ACE1AF', color:'#0A6847', fontSize:'25px',borderRadius:'20px'}} className="fixed top-5 px-4 py-5" role="alert">
              <strong >Success!</strong>&nbsp;
              <span className="block sm:inline">Tickets booked successfully.</span>
            </div>
            )}
            
        </div>
      </div>
    </div>
  )
}

export default BookingPage