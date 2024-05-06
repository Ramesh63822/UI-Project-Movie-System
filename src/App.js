
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousal from './components/Carousal/Carousal';

import ranam from './components/Carousal/asserts Carousal/ranam-carousal.jpg'
import jawan from './components/Carousal/asserts Carousal/jawan-carousal1.jpg'
import siren from './components/Carousal/asserts Carousal/siren-carousal1.jpg'
import lalsalam from './components/Carousal/asserts Carousal/lalsalam-carousal.jpg'

function App() {
  let slides = [
    ranam,jawan,siren,lalsalam
        
]

  const [theme, setTheme] =useState('light')
  return (
    <div className={`container ${theme}`}>
    <Navbar theme = {theme} setTheme={setTheme} />
    <div className='w-[60%] m-auto pt-11 '>
    <Carousal slides ={slides} />
    </div>
    
    </div>
  );
}

export default App;
