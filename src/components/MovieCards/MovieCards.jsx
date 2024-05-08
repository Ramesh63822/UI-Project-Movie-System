import React from 'react'
import Demo from '../Demo/Demo'
import dora from './assertsMovieCard/Dora and the Lost City of Gold.jpg'



const MovieCards = () => {
  return (
    <div className='grid grid-cols-4'>
      
      <Demo image={dora}/>
      <Demo image={dora}/>
      <Demo image={dora}/>
      <Demo image={dora}/>
 

      </div>
  )
}

export default MovieCards