import React from 'react';
import {logo, hamburger} from '../assets';



const Navbar = () => {
return (

    <div className='w-full  h-[80px]  absolute z-2 top-0 left-0 right-0  shadow-2xl border-b bg-slate-800 '>
        
                <div className=' sm:max-w-[1240px] max-w-[600px]  w-full h-full  m-auto flex items-center justify-between '>

                        {/* logo */}
                        <img src={logo} alt='logo' className='h-[90px]  drop-shadow-4xl '/>

                        {/* nav-links */}
                        <div className=' hidden sm:flex justify-between items-center '>
                                <ul className='flex items-center justify-between gap-[70px] text-white font-md  '>
                                        <li className='hover:text-[#FF9100]'> <a href="#">Home</a></li>
                                        <li className='hover:text-[#FF9100]'> <a href="#">Events</a></li>
                                        <li className='hover:text-[#FF9100]'> <a href="#">Members</a></li>
                                        <li className='hover:text-[#FF9100]'> <a href="#">Contact Us</a></li>
                                      
                                </ul>
                        </div>

                        {/* register button */}
                        <div className=' hidden sm:flex  '>
                                <button className='  border shadow-lg hover:bg-white ease-in-out hover:text-[#FF9100] text-white px-8 py-2 rounded-lg'>Register</button>
                        </div>

                        {/* hamburger-icon */}
                        <div className='sm:hidden flex items-center'>
                                <button ><img src={hamburger} alt="hamburger-icon" style={{color:'white'}} className='w-10 h-10  ' /></button>
                        </div>

                </div>
        
    </div>
  )
}

export default Navbar