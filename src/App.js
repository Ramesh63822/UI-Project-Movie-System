
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [theme, setTheme] =useState('light')
  return (
    <div className={`container ${theme}`}>
    <Navbar theme = {theme} setTheme={setTheme} />
    
    </div>
  );
}

export default App;
