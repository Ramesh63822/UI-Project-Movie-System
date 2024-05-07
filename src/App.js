
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousal from './components/Carousal/Carousal';

import Demo from './components/Demo/Demo';
import MovieCards from './components/MovieCards/MovieCards';


function App() {
  const [theme, setTheme] =useState('light')
  return (
    <div className={`container ${theme}`}>
      <Navbar theme = {theme} setTheme={setTheme} /> 
      <Carousal />
      
      <MovieCards />
      
 
    </div>

  );
}

export default App;
