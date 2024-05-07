import React from 'react'
import lover from './assertsMovieCard/Lover.jpg'
import ayalan from './assertsMovieCard/ayalan.jpg'
import godzilla from './assertsMovieCard/godzilla.avif'
import jailer from'./assertsMovieCard/jailer.jpg'
import japan from './assertsMovieCard/japan.jpg'
import lalsalam from './assertsMovieCard/lalsalam.jpg'
import maharaja from './assertsMovieCard/maharaja.jpg'
import vadakupattiRamasami from './assertsMovieCard/vadakupattiRamasamy.jpg'
import antmanQuantamania from './assertsMovieCard/antmanquantamania.jpg'
import kanguva from './assertsMovieCard/kanguva.jpg'
import loveToday from './assertsMovieCard/lovetoday.jpg'
import animal from './assertsMovieCard/animal.jpg'


const MovieCards = () => {
  return (
    <div className='flex items-center justify-center min-h-screen container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

            {/* Card1 */}
            <div className='rounded-xl shadow-lg'> 
                <div className='p-5 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={lover} alt="" />
                    </div>
                    <h5 className='text-2xl md:text-3xl font-medium mt-3'>hello</h5>
                    <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                </div>
            </div>

            {/* Card 2 */}
            <div className='rounded-xl shadow-lg'> 
                <div className='p-5 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={ayalan} alt="" />
                    </div>
                    <h5 className='text-2xl md:text-3xl font-medium mt-3'>hello</h5>
                    <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                </div>
            </div>

            {/* Card 3*/}
            <div className='rounded-xl shadow-lg'> 
                <div className='p-5 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={godzilla} alt="" />
                    </div>
                    <h5 className='text-2xl md:text-3xl font-medium mt-3'>hello</h5>
                    <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                </div>
            </div>

            {/* Card 4*/}
            <div className='rounded-xl shadow-lg'> 
                <div className='p-5 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={jailer} alt="" />
                    </div>
                    <h5 className='text-2xl md:text-3xl font-medium mt-3'>hello</h5>
                    <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                </div>
            </div>

            {/* Card 5*/}
            <div className='rounded-xl shadow-lg'> 
                <div className='p-5 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={japan} alt="" />
                    </div>
                    <h5 className='text-2xl md:text-3xl font-medium mt-3'>hello</h5>
                    <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                </div>
            </div>

            {/* Card 6*/}
            <div className='rounded-xl shadow-lg'> 
                <div className='p-5 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={lalsalam} alt="" />
                    </div>
                    <h5 className='text-2xl md:text-3xl font-medium mt-3'>hello</h5>
                    <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                </div>
            </div>

            {/* Card 7*/}
            <div className='rounded-xl shadow-lg'> 
                <div className='p-5 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={maharaja} alt="" />
                    </div>
                    <h5 className='text-2xl md:text-3xl font-medium mt-3'>hello</h5>
                    <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                </div>
            </div>

            {/* Card 8*/}
            <div className='rounded-xl shadow-lg'> 
                <div className='p-5 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={vadakupattiRamasami} alt="" />
                    </div>
                    <h5 className='text-2xl md:text-3xl font-medium mt-3'>hello</h5>
                    <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                </div>
            </div>

            {/* Card 9*/}
            <div className='rounded-xl shadow-lg'> 
                <div className='p-5 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={antmanQuantamania} alt="" />
                    </div>
                    <h5 className='text-2xl md:text-3xl font-medium mt-3'>hello</h5>
                    <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                </div>
            </div>

            {/* Card 10*/}
            <div className='rounded-xl shadow-lg'> 
                <div className='p-5 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={kanguva} alt="" />
                    </div>
                    <h5 className='text-2xl md:text-3xl font-medium mt-3'>hello</h5>
                    <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                </div>
            </div>

            {/* Card 11*/}
            <div className='rounded-xl shadow-lg'> 
                <div className='p-5 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={loveToday} alt="" />
                    </div>
                    <h5 className='text-2xl md:text-3xl font-medium mt-3'>hello</h5>
                    <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                </div>
            </div>

            {/* Card 12*/}
            <div className='rounded-xl shadow-lg'> 
                <div className='p-5 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={animal} alt="" />
                    </div>
                    <h5 className='text-2xl md:text-3xl font-medium mt-3'>hello</h5>
                    <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                </div>
            </div>




        </div>
    </div>
  )
}

export default MovieCards