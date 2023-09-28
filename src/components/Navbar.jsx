import React from 'react';
import {logo, hamburger} from '../assets';



const Navbar = () => {
return (

    <div className='w-full  h-[80px] bg-white  border-b  '>
        
        <div className=' sm:max-w-[1240px] max-w-[600px]    w-full h-full  m-auto flex items-center justify-between '>

                {/* logo */}
                <img src={logo} alt='logo' className='h-[70px]'/>

                {/* nav-links */}
                <div className=' hidden sm:flex justify-between items-center'>
                        <ul className='flex items-center justify-between gap-16  '>
                                <li>Home</li>
                                <li>Events</li>
                                <li>Members</li>
                                <li>About Us</li>
                        </ul>
                </div>

                {/* register button */}
                <div className=' hidden sm:flex '>
                        <button className='bg-[#0059AA] hover:bg-[#3573ad]  ease-in-out text-white px-8 py-2 rounded-lg'>Register</button>
                </div>

                {/* hamburger-icon */}
                <div className='sm:hidden flex items-center'>
                        <button><img src={hamburger} alt="hamburger-icon"  className='w-10 h-10 ' /></button>
                </div>

        </div>
        
    </div>
  )
}

export default Navbar