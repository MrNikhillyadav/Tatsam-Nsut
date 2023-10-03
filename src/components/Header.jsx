import React from 'react'
// import {h_1, h_2}  from '../assets';
import hero from '../assets/pngs/hero.png';
import Navbar from './Navbar';

const Header = () => {
  return (
          <header className='w-full  h-screen border-b '>

                {/* Hero image */}
                <img className='top-0 left-0 w-full h-screen  object-cover ' src={hero} alt="" />

                {/* Navbar  */}
                < Navbar className="absolute top-0 left-0 z-2 " />

                {/* overlay */}
                <div className='bg-black/40 absolute top-0 left-0 z-1 w-full h-full  '></div>

                        <div className='absolute top-0 left-0 w-full h-screen'>
                        <div className=' sm:max-w-[1240px] max-w-[600px]  w-full h-full   m-auto items-center   pt-[150px] pb-[150px]  '>

                                {/* Text-container */}
                                <div className='   text-white px-8 md:text-left  flex flex-col items-center justify-center text-center mb-11'>

                                        <h2 className='md:text-[90px] text-[60px] mb-[-20px] font-bold' >TATSAM</h2>
                                        <h2 className='md:text-[30px]  text-[20px] pt-2 text-slate-200'>The Hindi Society of NSUT</h2>
                                        <p className='md:text-sm text-[12px]   text-slate-200'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Veritatis commodi facere soluta architecto eius nulla quaerat dolores quis! Ut.
                                        Veritatis commodi facere soluta architecto eius nulla quaerat dolores quis! Ut.
                                        Veritatis commodi facere soluta architecto eius nulla quaerat dolores quis! Ut.
                                        </p>
                                        <button className='border border-white shadow-lg rounded-lg hover:bg-white/40 text-white md:px-8 md:py-2 mt-6  mb-2 px-5 py-2'> Join Us</button>
                                </div>

                              
                        </div>
                        
                        </div>
    </header>
  )
}

export default Header