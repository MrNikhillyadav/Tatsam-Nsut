import React, {useState} from 'react';
import {logo} from '../assets';
import {FaBars} from 'react-icons/fa'
import {MdCancel} from 'react-icons/md'



const Navbar = () => {
        const [nav, setnav] = useState(false);
        const handleNav = () => {
                setnav(!nav);
                if(!nav){
                        document.body.style.overflow = 'hidden';
                }else{
                        document.body.style.overflow = 'scroll';
                }
        };

        const data = [
                {
                        id : '1',
                        link : 'Home'
                },
                {
                        id : '2',
                        link : 'Events'
                },
                {
                        id : '3',
                        link : 'Members'
                },
                {
                        id : '4',
                        link : 'Contact'
                },
                
        ];

return (

    <div className='w-full   h-[80px]  absolute z-2 top-0 left-0 right-0  shadow-md  bg-black bg-opacity-60 sm:bg-opacity-30  md:bg-opacity-40 '>
        
                <div className=' sm:max-w-[1240px] max-w-[600px]  w-full h-full  m-auto flex items-center justify-between '>

                        {/* logo */}
                        <img src={logo} alt='logo' className='h-[90px] shadow-white  drop-shadow-4xl  '/>

                        {/* nav-links */}
                        <ul className='hidden  sm:flex items-center justify-between md:gap-[70px] gap-12 text-white font-md  '>
                                { data.map(({id,link}) => (
                                                <li key={id} className=' cursor-pointer ' >
                                                        {link}
                                                </li>
                                        ))}     
                        </ul>

                        {/* register button */}
                        <div className=' hidden sm:flex px-2 '>
                                <button className='  border shadow-lg bg-white   ease-in-out hover:text-[#FF9100] text-black px-8 py-2 rounded-lg'>Register</button>
                        </div>

                        {/* toggle-icon */}
                        <div onClick={() => handleNav()} className='sm:hidden flex items-center'>

                                {nav ?<MdCancel style = {{ color: "white", fontSize: "2em"} }  className='  cancel mr-5 z-99' /> 
                                : 
                                <FaBars style = {{ color: "white", fontSize: "1.5em"} }  className=' mr-5  '
                                />}

                                {nav && (<ul className='flex dropdown flex-col bg-gradient-to-b from-black to-gray-900  justify-center gap-8  absolute text-sm rounded-lg text-gray-400 top-2 right-0 items-center   '>
                                        { data.map(({id,link}) => (
                                                        <li  key={id} className=' text-center tracking-wider hover:text-orange-400 hover:scale-125 cursor-pointer duration-200  ' >
                                                                {link}
                                                        </li>
                                                ))}     
                                </ul>)
                                }
                        </div>


                        
                              
                        


                </div>
        
    </div>
  )
}

export default Navbar