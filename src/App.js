
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousal from './components/Carousal/Carousal';
import MovieCards from './components/MovieCards/MovieCards';
import Footer from './components/Footer/Footer';
import Signin from './components/SignIn/Signin';
import BookingPage from './components/BookingPage/BookingPage.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './components/CreatedAccount/Register.jsx';

function App() {
  const [theme, setTheme] =useState('light')
  return (
      <BrowserRouter>
      <div className={`container ${theme} bg-zinc-700`}>
      <div>
      {/* <div className='sticky top-0 z-10'> */}
        <Navbar theme = {theme} setTheme={setTheme} /> 
        
      </div>
      <Routes>
        <Route path='/signin' element={<Signin theme={theme} />}/>
        <Route path='/register' element={<Register theme={theme} />} />
        <Route path='/' element={<Home theme={theme} />} />
        <Route path='/booking' element={<BookingPage theme={theme}/>} />
      </Routes>

      <Footer theme={theme}/>
    </div>
      
      </BrowserRouter>
        );
      }

      function Home({theme}) {
  return (
    <>
      <Carousal />
      <div className={`newRelease ${theme}`}>
        <h1 style={{ marginBottom: '25px', color: 'black', fontSize: '40px', marginTop: '30px' }}>
          New Release
        </h1>
      </div>
      <MovieCards />
    </>
  

  );
}

export default App;
