import React from 'react';
import {logo, hamburger} from '../assets';



const Navbar = () => {
return (

    <div className='w-full  h-[80px]  absolute z-2 top-0 left-0 right-0  shadow-2xl border-b bg-slate-900 '>
        
                <div className=' sm:max-w-[1240px] max-w-[600px]  w-full h-full  m-auto flex items-center justify-between '>

                        {/* logo */}
                        <img src={logo} alt='logo' className='h-[90px]  drop-shadow-4xl '/>

                        {/* nav-links */}
                        <div className=' hidden sm:flex justify-between items-center text-md'>
                                <ul className='flex items-center justify-between gap-20 text-white font-semibold  '>
                                        <li>Home</li>
                                        <li>Events</li>
                                        <li>Members</li>
                                        <li>About Us</li>
                                </ul>
                        </div>

                        {/* register button */}
                        <div className=' hidden sm:flex  '>
                                <button className=' hover:bg-[#3573ad] border border-white shadow-lg ease-in-out text-white px-8 py-2 rounded-lg'>Register</button>
                        </div>

                        {/* hamburger-icon */}
                        <div className='sm:hidden flex items-center'>
                                <button><img src={hamburger} alt="hamburger-icon" style={{color:'white'}} className='w-10 h-10 ' /></button>
                        </div>

                </div>
        
    </div>
  )
}

export default Navbar