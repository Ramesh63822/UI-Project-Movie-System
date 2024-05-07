import React, { useState } from 'react'
import ranam from './asserts Carousal/ranam-carousal.jpg'
import jawan from './asserts Carousal/jawan-carousal1.jpg'
import siren from './asserts Carousal/siren-carousal1.jpg'
import lalsalam from './asserts Carousal/lalsalam-carousal.jpg'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';




const Carousal = () => {

    const slides=[ranam,jawan,siren,lalsalam]
    const [index,setIndex] = useState(0)

    const beforeSlide = ()=>{
        const firstSlide = index === 0
        const newIndex = firstSlide? slides.length -1 : index -1
        setIndex(newIndex)
    }

    const afterSlide = ()=>{
        const lastSlide = index === slides.length - 1
        const newIndex= lastSlide ? 0 : index + 1
        setIndex(newIndex)
        
    }


  return (
    <div className=' h-full w-full  relative group'>
        <div style={{backgroundImage: `url(${slides[index]})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
        </div>
        <div className='hidden group-hover:block absolute top-[40%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
            <BsChevronCompactLeft onClick={beforeSlide} size={30}/>
        </div>
        <div className='hidden group-hover:block absolute top-[40%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={afterSlide} size={30}/>
        </div>
        
        

    </div>
  )
}

export default Carousal