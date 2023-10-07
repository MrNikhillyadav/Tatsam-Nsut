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
        <div className='newsletter'>  
            <div className="image">
                <img src={newsletter}/>
            </div>  
            
            <div className="news-head">
                Subscribe to Our Newsletter
            </div>
            <div className="news-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            t has survivs
            </div>
            <div className="email">
                <input type='text' placeholder='Enter Your Email Address'/>
                <button>Subscribe</button>
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