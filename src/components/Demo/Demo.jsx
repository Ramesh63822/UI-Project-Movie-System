import React from 'react'



const Demo = (props) => {
  return (
    <div className='flex items-center justify-center min-h-screen container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

            {/* Card1 */}
            <div className='rounded-xl shadow-lg'> 
                <div className='p-5 flex flex-col'>
                    <div className=' rounded-xl overflow-hidden '>
                        <img className='h-64 w-'  src={props.image} alt="" />
                    </div>
                    <h5 className='text-2xl md:text-3xl font-medium mt-3'>hello</h5>
                    <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                </div>
            </div>

            {/* Card1
            <div className='rounded-xl shadow-lg'> 
                <div className='p-5 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={animal} alt="" />
                    </div>
                    <h5 className='text-2xl md:text-3xl font-medium mt-3'>hello</h5>
                    <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                </div>
            </div> */}

            {/* Card1
            <div className='rounded-xl shadow-lg'> 
                <div className='p-5 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={animal} alt="" />
                    </div>
                    <h5 className='text-2xl md:text-3xl font-medium mt-3'>hello</h5>
                    <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                </div>
            </div> */}

            

            


        </div>
    </div>
  )
}

export default Demo