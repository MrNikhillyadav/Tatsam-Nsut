import React from 'react'
import {hero}  from '../assets';
import Navbar from './Navbar';
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
          <header className='w-full  h-screen border-b  relative'>


                {/* Hero image */}
                <img className='top-0 left-0 w-full h-screen  brightness-50 object-cover ' src={hero} alt="" />


                        <div className='absolute top-0 left-0 w-full h-screen'>
                        <div className=' sm:max-w-[1240px] max-w-[600px]  w-full h-full   m-auto items-center   pt-[150px] pb-[150px]  '>

                                <Navbar  />

                                {/* Text-container */}
                                <div className='   text-white px-8 md:text-left  flex flex-col  text-wrap items-center justify-center text-center mb-11'>

                                        <h2 className='md:text-[90px] text-[60px]  mb-[-20px] font-bold' >TATSAM</h2>
                                        <h2 className='md:text-[30px]  text-[20px] pt-2 text-slate-200'>The Hindi Society of NSUT</h2>
                                        
                                        <div className='md:text-sm leading-3 bg-black p-2 bg-opacity-20 rounded text-[12px] text-center  tracking-wide  text-slate-200'>
                                        Welcome to Tatsam - The Hindi Society of NSUT, where ordinary moments transform into extraordinary memories, and dreams find their wings to soar.
                                        <p className='hidden md:inline text-slate-200 tracking-wide '>
                                        At Tatsam, we're not just a college society, we're a community of dreamers, creators, and visionaries. We aim to ignite the spark of passion,
                                         creativity, and culture through the beautiful tapestry of Hindi language and art.
                                        </p>
                                        </div>
                                        <button className=' drop-shadow-xl  duration-300 rounded-lg bg-[#FF9100] hover:bg-white/40 text-white md:px-6 md:py- md:text-[18px] mt-6 text-[14px]  mb-2 px-4 py-1 '> Join Us</button>

                                        <div className='md:mt-[360px] absolute bottom-5  left-0 right-0 px-4  '>
                                        <SocialLinks />
                                        </div>
                                </div>

                              
                        </div>
                        
                        </div>
    </header>
  )
}

export default Header