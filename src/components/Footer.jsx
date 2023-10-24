import React from 'react'
import { footer } from '../assets'
import { logo } from '../assets'
import './Footer.css'

const Footer = () => {
  return (
        <div className='w-full  flex items-center  justify-center'>    

                <footer>


                  <div className="footer-container">
                    <div className="logo">
                      <img src={logo} alt="" srcset="" />
                    </div>
                    <div className="first-container">
          
                      <div className="about-head heading">
                         About Us
                      </div>

                   <div className="description">
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae neque illum aspernatur fugiat maiores id magni, modi, quaerat vitae.
                      </p>

                      <div className="read-more">
                        Read More...
                      </div>
                    </div>
                    </div>

                    <div className="third-container">
                     <div className="heading">
                      Link
                     </div>

                     <div className="link">
                       <ul>
                         <li>
                            <a href="#">About</a>
                         </li>

                         <li>
                            <a href="#">Contact Us</a>
                         </li>

                         <li>
                            <a href="#">Our Events</a>
                         </li>
                         
                         <li>
                            <a href="#">NewsLetter</a>
                         </li>

                         <li>
                            <a href="#">Back to top</a>
                         </li>
                       </ul>
                     </div>
                  </div>

                  <div className="second-container">
                    
                    <div className="heading">
                      Contact
                    </div>

                    <ul>
                      <li className='address'>
                        <span className='contact-icon'><i class="uil uil-map-marker"></i></span>
                        <span>Netaji Subhas University
                        <br/> of Technology 
                        <br/>
                        Sector -3, Dwarka
                        <br/>
                        New Delhi - 110078
                        </span>
                      </li>

                      <li className='contact'>
                        <span className='contact-icon'><i class="uil uil-envelope"></i></span>
                        <span>Email : tatsam@nsut.ac.in</span>
                      </li>

                      <li className='contact'>
                        <span className="contact-icon">
                        <i class="contact-icon uil uil-phone"></i>
                        </span>
                        <span>
                        Chief-Convener: +91 97113 57634 <br/>
                        </span>
                      </li>
                    </ul>
                  </div>

                  </div>

                  <div className="copyright">
                     <div className="copy-right">
                     Tatsam © 2023 - All Rights Reserved
                     </div>

                     <div className="social-icons">
                     <ul>
                            <li>
                              <a href="#">
                                <i class="uil uil-instagram"></i>
                              </a>
                            </li>

                            <li>
                              <a href="#">
                              <i class="uil uil-facebook-f"></i>
                              </a>
                            </li>

                            <li>
                              <a href="#">
                              <i class="uil uil-github-alt"></i>
                              </a>
                            </li>

                            <li>
                              <a href="#">
                                 <i class="uil uil-whatsapp"></i>
                              </a>
                            </li>
                          </ul>
                     </div>
                  </div> 
                </footer>           
           
        </div>
  )
}

export default Footer