

import React from 'react'
import './Navbar.css'
import search_icon_light from './assets/search-w.png'
import search_icon_dark from './assets/search-b.png'
import toggle_light from './assets/night.png'
import toggle_dark from './assets/day.png'
import {Link} from 'react-router-dom'




const Navbar = ({theme, setTheme}) => {
    const toggle_mode = ()=>{
        theme == 'light'? setTheme('dark') : setTheme('light')
    }

  return (
    
    <div  className={`navbar ${theme} `} >
        
        <h1 className={theme}>R-Movies</h1>
        <ul>
            <li>
                Home
            </li>
            <li>
                Offer
            </li>
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
           <button><h5>Sign in</h5></button>
        </div>
    
    </div>
  )
}

export default Navbar