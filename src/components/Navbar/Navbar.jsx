
import { useState , useEffect} from 'react';
import React from 'react'
import './Navbar.css'
import search_icon_light from './assets/search-w.png'
import search_icon_dark from './assets/search-b.png'
import toggle_light from './assets/night.png'
import toggle_dark from './assets/day.png'
import { Link } from 'react-router-dom'
import { Alert } from 'bootstrap';




const Navbar = ({theme, setTheme}) => {
    const toggle_mode = ()=>{
        theme == 'light'? setTheme('dark') : setTheme('light')
    }


    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
      if (showAlert) {
        const timer = setTimeout(() => {
          setShowAlert(false);
        }, 1500);
  
        // Clear timeout if the component is unmounted or showAlert is set to false
        return () => clearTimeout(timer);
      }
    }, [showAlert]);
  
    const handleBookTickets = () => {
      setShowAlert(true);
    };

  return (
    
    <div  className={`navbar h-[75px] ${theme} `} >
        <h1 className={theme}>R-Movies</h1>
        <ul>
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li onClick={handleBookTickets}>
                Offer
            </li>
            {showAlert && (
        <div className="floating-alert">
          <strong className="font-bold">Offer's !</strong>
          <span className="block sm:inline">&nbsp; No Offers Found.</span>
        </div>
      )}
            
            <li>
                <select>
                    <option>Location</option>
                    <option>Chennai</option>
                    <option>Coimbatore</option>
                    <option>Madurai</option>
                    <option>Tenkasi</option>
                </select>
                
            </li>
            
        </ul>

        <div className={`search-box ${theme}`}>
            <input type="text" placeholder='search' />
            <img src={theme == 'light'? search_icon_light : search_icon_dark} alt="" />
        </div>

        

        <img src={theme == 'light'? toggle_light : toggle_dark} alt="" onClick={()=> {toggle_mode()}} className='toggle-icon'/>

  
    <div className={`button ${theme}`}>
            
            <Link to='/signin'>
            <button><h5>Sign in</h5></button>
            </Link>
          
        </div>
   
        {/* <Outlet /> */}
    
    </div>
  )
}

export default Navbar