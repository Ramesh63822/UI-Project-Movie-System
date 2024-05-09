
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousal from './components/Carousal/Carousal';

import Demo from './components/Demo/Demo';
import MovieCards from './components/MovieCards/MovieCards';
import Footer from './components/Footer/Footer';


function App() {
  const [theme, setTheme] =useState('light')
  return (
    <div className={`container ${theme} bg-zinc-700`}>
      <div>
      {/* <div className='sticky top-0 z-10'> */}
        <Navbar theme = {theme} setTheme={setTheme} /> 
      </div>
      
      <Carousal />
      <div className='newRelease'>
      <h1 style={{marginBottom:'25px', marginTop:'30px'}}>
        New Release
      </h1>
      </div>      
      
      <MovieCards />
      <Footer/>
      
 
    </div>

  );
}

export default App;
