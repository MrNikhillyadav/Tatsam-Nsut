import React, {useState} from 'react';
import {logo} from '../assets';
import {FaBars} from 'react-icons/fa'
import {MdCancel} from 'react-icons/md'
import { Link } from 'react-scroll';



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

                 // Function to handle the activation of a link.
                const handleSetActive = (to) => {
                console.log(to);
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
                        <img src={logo} alt='logo' className='h-[80px]  md:h-[90px] shadow-white  drop-shadow-4xl  '/>

                        {/* nav-links */}
                        <ul className='hidden  sm:flex items-center justify-between md:gap-[70px] gap-12 text-white font-md  '>
                                { data.map(({id,link}) => (
                                                <li key={id} className=' cursor-pointer ' >     
                                                        <Link 
                                                                activeClass="active" 
                                                                to={link} 
                                                                smooth={true} 
                                                                offset={0} 
                                                                duration={500} 
                                                                onSetActive={handleSetActive}>
                                                                {link}
                                                        </Link>
                                                </li>
                                        ))}     
                        </ul>

                        {/* register button */}
                        <div className=' hidden sm:flex px-2 '>
                                <button className='  border shadow-lg bg-white   ease-in-out hover:text-[#FF9100] text-black px-5 py-2 rounded-lg'>Register</button>
                        </div>

                        {/* toggle-icon */}
                        <div onClick={() => handleNav()} className='sm:hidden flex items-center bg-white bg-opacity-10  rounded-3xl mr-2 '>

                                {nav ?<MdCancel style = {{ color: "white", fontSize: "1.7em"} }  className='  mx-4  cancel ' /> 
                                : 
                                <FaBars style = {{ color: "white", fontSize: "1.2em"} }  className='mx-4 my-2  '
                                />}

                                {nav && (<ul className='flex dropdown flex-col bg-gradient-to-b from-black to-gray-900  m-2  border-slate-600 shadow-2xl border-b border-r drop-shadow-2xl  justify-center gap-8  absolute text-sm rounded-lg text-gray-400 top-2 right-0 items-center   '>
                                        { data.map(({id,link}) => (
                                                        <li  key={id} className=' text-center tracking-wider hover:text-orange-400 hover:scale-125 cursor-pointer duration-200  ' >
                                                                <Link 
                                                                onClick={() => handleNav()}
                                                                activeClass="active" 
                                                                to={link} 
                                                                smooth={true} 
                                                                offset={0} 
                                                                duration={500} 
                                                                onSetActive={handleSetActive}  >
                                                                {link}
                                                        </Link>
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