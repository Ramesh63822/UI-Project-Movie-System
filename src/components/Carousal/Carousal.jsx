import React, { useState } from 'react'
import kalakuthu from './asserts Carousal/carousal1.jpg'
import superDeluxe from './asserts Carousal/carousal2.jpg'
import kakkiSattai from './asserts Carousal/carousal3.jpg'
import pandiyaNadu from './asserts Carousal/carousal4.jpg'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';




const Carousal = () => {

    const slides=[kalakuthu,superDeluxe,kakkiSattai,pandiyaNadu]
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
    <div style={{width:'1320px', height:'450px', margin:'15px'}} className='  relative group'>
        
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
            <img style={{width:'1320px', height:'450px', borderRadius:'15px'}} src={slides[index]} alt="" />
        </div>
        <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
            <BsChevronCompactLeft onClick={beforeSlide} size={30}/>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={afterSlide} size={30}/>
        </div>
        
        

    </div>
  )
}

export default Carousal