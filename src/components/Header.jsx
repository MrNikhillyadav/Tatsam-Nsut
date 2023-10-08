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
                                <div className='   text-white px-8 md:text-left  flex flex-col  items-center justify-center text-center mb-11'>

                                        <h2 className='md:text-[90px] text-[60px] mb-[-20px] font-bold' >TATSAM</h2>
                                        <h2 className='md:text-[30px]  text-[20px] pt-2 text-slate-200'>The Hindi Society of NSUT</h2>
                                        <p className='md:text-sm text-[12px]   text-slate-200'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Veritatis commodi facere soluta architecto eius nulla quaerat dolores quis! Ut.
                                        Veritatis commodi facere soluta architecto eius nulla quaerat dolores quis! Ut.
                                        Veritatis commodi facere soluta architecto eius nulla quaerat dolores quis! Ut.
                                        </p>
                                        <button className=' drop-shadow-xl border  duration-300 rounded-lg bg-[#FF9100] hover:bg-white/40 text-white md:px-8 md:py-2 mt-6  mb-2 px-5 py-2'> Join Us</button>

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