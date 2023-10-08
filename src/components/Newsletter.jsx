import React from 'react'
import {newsletter}  from '../assets';
import './Newsletter.css'
import emailjs from 'emailjs-com';


const Newsletter = () => {
  function sendEmail(e) {
    e.preventDefault();  

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          window.location.reload()  
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    
        <div className='newsletter '>  
            <div className="image">
                <img src={newsletter} className='drop-shadow-sm'/>
            </div>  
            
            <div className="news-head">
                Subscribe to our Newsletter
            </div>
            <div className="news-content flex justify-center flex-col text-center items-center text-slate-400">
                <p className='hidden md:block mb-2'>Are you ready to unlock the secrets of tech trends and innovations? </p>
             <p> Join our thriving community of tech enthusiasts and discover the invaluable insights. <br className='hidden lg:block' /> Over <span className='text-slate-600 font-bold px-1'> 1,000+ </span> of your peers have already unlocked through our exclusive newsletter.</p>
            </div>
            <div className="email drop-shadow-sm">
                <input className='text-sm  ' type='text'  placeholder='Enter Your Email Address'/>
                <button className='  drop-shadow-lg   px-5'>Subscribe</button>
            </div>
        </div>
  )
}

export default Newsletter
{/* <div className=' sm:max-w-[1240px] max-w-[600px] border border-black  w-full h-full  m-auto  '>

{/* Write your code below this line */}

{/* <h1>Subscribe to our newsletter</h1> */}





// </div> */}
// w-full bg-white  border-b