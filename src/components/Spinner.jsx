import React, { useEffect } from 'react'
import './spinner.css';
import {logo} from '../assets';


const Spinner = () => {

    // useEffect(() => {
    //     preLoaderAnim()
    // },[]);

  return (
    <div>
       <div className="loading-bg">
          <div className="loader">
            <div className="circle">

            </div>
            <img src={logo} alt="" srcSet="" />
          </div>
       </div>
    </div>
  )
}

export default Spinner
