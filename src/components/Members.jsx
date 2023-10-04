import React from 'react'


import slide_image_1 from '../assets/images/img-1.jpeg';
import slide_image_2 from '../assets/images/img-2.jpeg';
import slide_image_3 from '../assets/images/img-3.jpeg';
import slide_image_4 from '../assets/images/img-4.jpeg';
import slide_image_5 from '../assets/images/img-5.jpeg';
import slide_image_6 from '../assets/images/img-6.jpeg';
import slide_image_7 from '../assets/images/img-7.jpeg';
import slide_image_8 from '../assets/images/img-8.jpeg';
import slide_image_9 from '../assets/images/img-9.jpeg';
import slide_image_10 from '../assets/images/img-10.jpeg';
import slide_image_11 from '../assets/images/img-11.jpg';
import slide_image_12 from '../assets/images/img-12.jpg';

const Members = () => {
  return (
        <div>    
            <div>

                    {/* Write your code below this line */}


                    <div className="members-section">
                        <div className="container-members">
                        <div className="member-tab">

                          <input type="radio" className='tab_btn all active checked' name='slider' id="all" />
                          <input type="radio" className='tab_btn' name='slider' id="lead" />
                          <input type="radio" className='tab_btn' name='slider' id="tech" />
                          <input type="radio" className='tab_btn' name='slider' id="content" />
                          <input type="radio" className='tab_btn' name='slider' id="design" />
                          <input type="radio" className='tab_btn' name='slider' id="pr" />


                          <div className="title-team">The Team</div>
                          <div className="underline"></div>
                          
                          <nav>
                            <label htmlFor="all" className="all">All</label>
                            <label htmlFor="lead" className="lead">Lead</label>
                            <label htmlFor="tech" className="tech">Tech</label>
                            <label htmlFor="content" className="content">Content</label>
                            <label htmlFor="pr" className="pr">PR</label>
                            <label htmlFor="design" className="design">Design</label>
                            <div className="slider"></div>
                          </nav>

                          <section className='tab-content'>
                            <div className="member-content content-1">
                      
                            

                            {/* All member section starts from here */}




                            <div className="container-member">
                    <div className="card cursor-pointer group-hover:blur-sm hover:!blur-none">
                        <div className="content-card">
                          <div className="img">
                            <img src={slide_image_1} alt="" />
                          </div>
                          <div className="content-box">
                            <h3>Akshay Kumar</h3>
                            <span className='designation'>Joint Secratory</span>

                            <p className='team-about mt-5 hover:text-white-500 px-5'>"Lorem ipsum dolor sit amet consectetur adipiskkn."</p>
                          </div>
                        </div>

                        <ul className="sci">
                        <li>
                          <a href=""><i class="uil uil-instagram"></i></a>
                        </li>

                        <li>
                          <a href=""><i class="uil uil-linkedin"></i></a>
                        </li>
                      </ul>

                      </div>

                      <div className="card cursor-pointer group-hover:blur-sm hover:!blur-none">
                        <div className="content-card">
                          <div className="img">
                            <img src={slide_image_2} alt="" />
                          </div>
                          <div className="content-box">
                            <h3>Ajay Devgon</h3>
                            <span className='designation'>President</span>

                            <p className='team-about mt-5 hover:text-white-500 px-5'>"Lorem ipsum dolor sit amet consectetur adipiskkn."</p>
                          </div>
                        </div>

                        <ul className="sci">
                        <li>
                          <a href=""><i class="uil uil-instagram"></i></a>
                        </li>

                        <li>
                          <a href=""><i class="uil uil-linkedin"></i></a>
                        </li>
                      </ul>

                      </div>


                      <div className="card cursor-pointer group-hover:blur-sm hover:!blur-none">
                        <div className="content-card">
                          <div className="img">
                            <img src={slide_image_3} alt="" />
                          </div>
                          <div className="content-box">
                            <h3>Salman Khan</h3>
                            <span className='designation'>Vice-President</span>
                            <p className='team-about mt-5 hover:text-white-500 px-5'>"Lorem ipsum dolor sit amet consectetur adipiskkn."</p>
                          </div>
                        </div>

                        <ul className="sci">
                        <li>
                          <a href=""><i class="uil uil-instagram"></i></a>
                        </li>

                        <li>
                          <a href=""><i class="uil uil-linkedin"></i></a>
                        </li>
                      </ul>

                      </div>

                    
                    </div>






                            {/* All member section Ends from here */}



                            </div>


                            <div className="member-content content-2">
                          
                            

                            {/* Lead section starts from here */}




                            
                            <div className="container-member">
                    <div className="card cursor-pointer group-hover:blur-sm hover:!blur-none">
                        <div className="content-card">
                          <div className="img">
                            <img src={slide_image_4} alt="" />
                          </div>
                          <div className="content-box">
                            <h3>Akshay Kumar</h3>
                            <span className='designation'>Joint Secratory</span>

                            <p className='team-about mt-5 hover:text-white-500 px-5'>"Lorem ipsum dolor sit amet consectetur adipiskkn."</p>
                          </div>
                        </div>

                        <ul className="sci">
                        <li>
                          <a href=""><i class="uil uil-instagram"></i></a>
                        </li>

                        <li>
                          <a href=""><i class="uil uil-linkedin"></i></a>
                        </li>
                      </ul>

                      </div>

                      <div className="card cursor-pointer group-hover:blur-sm hover:!blur-none">
                        <div className="content-card">
                          <div className="img">
                            <img src={slide_image_5} alt="" />
                          </div>
                          <div className="content-box">
                            <h3>Ajay Devgon</h3>
                            <span className='designation'>President</span>

                            <p className='team-about mt-5 hover:text-white-500 px-5'>"Lorem ipsum dolor sit amet consectetur adipiskkn."</p>
                          </div>
                        </div>

                        <ul className="sci">
                        <li>
                          <a href=""><i class="uil uil-instagram"></i></a>
                        </li>

                        <li>
                          <a href=""><i class="uil uil-linkedin"></i></a>
                        </li>
                      </ul>

                      </div>


                      <div className="card cursor-pointer group-hover:blur-sm hover:!blur-none">
                        <div className="content-card">
                          <div className="img">
                            <img src={slide_image_6} alt="" />
                          </div>
                          <div className="content-box">
                            <h3>Salman Khan</h3>
                            <span className='designation'>Vice-President</span>
                            <p className='team-about mt-5 hover:text-white-500 px-5'>"Lorem ipsum dolor sit amet consectetur adipiskkn."</p>
                          </div>
                        </div>

                        <ul className="sci">
                        <li>
                          <a href=""><i class="uil uil-instagram"></i></a>
                        </li>

                        <li>
                          <a href=""><i class="uil uil-linkedin"></i></a>
                        </li>
                      </ul>

                      </div>

                    
                    </div>





                            {/* Lead section Ends from here */}


                            </div>

                            <div className="member-content content-3">
        
                            

                            {/* Tech section starts from here */}




                            
                            <div className="container-member">
                    <div className="card cursor-pointer group-hover:blur-sm hover:!blur-none">
                        <div className="content-card">
                          <div className="img">
                            <img src={slide_image_7} alt="" />
                          </div>
                          <div className="content-box">
                            <h3>Akshay Kumar</h3>
                            <span className='designation'>Joint Secratory</span>

                            <p className='team-about mt-5 hover:text-white-500 px-5'>"Lorem ipsum dolor sit amet consectetur adipiskkn."</p>
                          </div>
                        </div>

                        <ul className="sci">
                        <li>
                          <a href=""><i class="uil uil-instagram"></i></a>
                        </li>

                        <li>
                          <a href=""><i class="uil uil-linkedin"></i></a>
                        </li>
                      </ul>

                      </div>

                      <div className="card cursor-pointer group-hover:blur-sm hover:!blur-none">
                        <div className="content-card">
                          <div className="img">
                            <img src={slide_image_8} alt="" />
                          </div>
                          <div className="content-box">
                            <h3>Ajay Devgon</h3>
                            <span className='designation'>President</span>

                            <p className='team-about mt-5 hover:text-white-500 px-5'>"Lorem ipsum dolor sit amet consectetur adipiskkn."</p>
                          </div>
                        </div>

                        <ul className="sci">
                        <li>
                          <a href=""><i class="uil uil-instagram"></i></a>
                        </li>

                        <li>
                          <a href=""><i class="uil uil-linkedin"></i></a>
                        </li>
                      </ul>

                      </div>


                      <div className="card cursor-pointer group-hover:blur-sm hover:!blur-none">
                        <div className="content-card">
                          <div className="img">
                            <img src={slide_image_9} alt="" />
                          </div>
                          <div className="content-box">
                            <h3>Salman Khan</h3>
                            <span className='designation'>Vice-President</span>
                            <p className='team-about mt-5 hover:text-white-500 px-5'>"Lorem ipsum dolor sit amet consectetur adipiskkn."</p>
                          </div>
                        </div>

                        <ul className="sci">
                        <li>
                          <a href=""><i class="uil uil-instagram"></i></a>
                        </li>

                        <li>
                          <a href=""><i class="uil uil-linkedin"></i></a>
                        </li>
                      </ul>

                      </div>

                    
                    </div>





                            {/* Tech section Ends from here */}



                            </div>

                            <div className="member-content content-4">
                   
                            

                            {/* Content section starts from here */}




                            
                            <div className="container-member">
                    <div className="card cursor-pointer group-hover:blur-sm hover:!blur-none">
                        <div className="content-card">
                          <div className="img">
                            <img src={slide_image_10} alt="" />
                          </div>
                          <div className="content-box">
                            <h3>Akshay Kumar</h3>
                            <span className='designation'>Joint Secratory</span>

                            <p className='team-about mt-5 hover:text-white-500 px-5'>"Lorem ipsum dolor sit amet consectetur adipiskkn."</p>
                          </div>
                        </div>

                        <ul className="sci">
                        <li>
                          <a href=""><i class="uil uil-instagram"></i></a>
                        </li>

                        <li>
                          <a href=""><i class="uil uil-linkedin"></i></a>
                        </li>
                      </ul>

                      </div>

                      <div className="card cursor-pointer group-hover:blur-sm hover:!blur-none">
                        <div className="content-card">
                          <div className="img">
                            <img src={slide_image_11} alt="" />
                          </div>
                          <div className="content-box">
                            <h3>Ajay Devgon</h3>
                            <span className='designation'>President</span>

                            <p className='team-about mt-5 hover:text-white-500 px-5'>"Lorem ipsum dolor sit amet consectetur adipiskkn."</p>
                          </div>
                        </div>

                        <ul className="sci">
                        <li>
                          <a href=""><i class="uil uil-instagram"></i></a>
                        </li>

                        <li>
                          <a href=""><i class="uil uil-linkedin"></i></a>
                        </li>
                      </ul>

                      </div>


                      <div className="card cursor-pointer group-hover:blur-sm hover:!blur-none">
                        <div className="content-card">
                          <div className="img">
                            <img src={slide_image_12} alt="" />
                          </div>
                          <div className="content-box">
                            <h3>Salman Khan</h3>
                            <span className='designation'>Vice-President</span>
                            <p className='team-about mt-5 hover:text-white-500 px-5'>"Lorem ipsum dolor sit amet consectetur adipiskkn."</p>
                          </div>
                        </div>

                        <ul className="sci">
                        <li>
                          <a href=""><i class="uil uil-instagram"></i></a>
                        </li>

                        <li>
                          <a href=""><i class="uil uil-linkedin"></i></a>
                        </li>
                      </ul>

                      </div>

                    
                    </div>





                            {/* Content section Ends from here */}


                            </div>


                            <div className="member-content content-5">
                     
                            

                            {/* PR section starts from here */}




                            <div className="container-member">
                    <div className="card cursor-pointer group-hover:blur-sm hover:!blur-none">
                        <div className="content-card">
                          <div className="img">
                            <img src={slide_image_1} alt="" />
                          </div>
                          <div className="content-box">
                            <h3>Akshay Kumar</h3>
                            <span className='designation'>Joint Secratory</span>

                            <p className='team-about mt-5 hover:text-white-500 px-5'>"Lorem ipsum dolor sit amet consectetur adipiskkn."</p>
                          </div>
                        </div>

                        <ul className="sci">
                        <li>
                          <a href=""><i class="uil uil-instagram"></i></a>
                        </li>

                        <li>
                          <a href=""><i class="uil uil-linkedin"></i></a>
                        </li>
                      </ul>

                      </div>

                      <div className="card cursor-pointer group-hover:blur-sm hover:!blur-none">
                        <div className="content-card">
                          <div className="img">
                            <img src={slide_image_2} alt="" />
                          </div>
                          <div className="content-box">
                            <h3>Ajay Devgon</h3>
                            <span className='designation'>President</span>

                            <p className='team-about mt-5 hover:text-white-500 px-5'>"Lorem ipsum dolor sit amet consectetur adipiskkn."</p>
                          </div>
                        </div>

                        <ul className="sci">
                        <li>
                          <a href=""><i class="uil uil-instagram"></i></a>
                        </li>

                        <li>
                          <a href=""><i class="uil uil-linkedin"></i></a>
                        </li>
                      </ul>

                      </div>


                      <div className="card cursor-pointer group-hover:blur-sm hover:!blur-none">
                        <div className="content-card">
                          <div className="img">
                            <img src={slide_image_3} alt="" />
                          </div>
                          <div className="content-box">
                            <h3>Salman Khan</h3>
                            <span className='designation'>Vice-President</span>
                            <p className='team-about mt-5 hover:text-white-500 px-5'>"Lorem ipsum dolor sit amet consectetur adipiskkn."</p>
                          </div>
                        </div>

                        <ul className="sci">
                        <li>
                          <a href=""><i class="uil uil-instagram"></i></a>
                        </li>

                        <li>
                          <a href=""><i class="uil uil-linkedin"></i></a>
                        </li>
                      </ul>

                      </div>

                    
                    </div>






                            {/*PR section Ends from here */}


                            </div>

                            <div className="member-content content-6">
                        
                            

                            {/* Design  section starts from here */}




                            
                            <div className="container-member">
                    <div className="card cursor-pointer group-hover:blur-sm hover:!blur-none">
                        <div className="content-card">
                          <div className="img">
                            <img src={slide_image_4} alt="" />
                          </div>
                          <div className="content-box">
                            <h3>Akshay Kumar</h3>
                            <span className='designation'>Joint Secratory</span>

                            <p className='team-about mt-5 hover:text-white-500 px-5'>"Lorem ipsum dolor sit amet consectetur adipiskkn."</p>
                          </div>
                        </div>

                        <ul className="sci">
                        <li>
                          <a href=""><i class="uil uil-instagram"></i></a>
                        </li>

                        <li>
                          <a href=""><i class="uil uil-linkedin"></i></a>
                        </li>
                      </ul>

                      </div>

                      <div className="card cursor-pointer group-hover:blur-sm hover:!blur-none">
                        <div className="content-card">
                          <div className="img">
                            <img src={slide_image_5} alt="" />
                          </div>
                          <div className="content-box">
                            <h3>Ajay Devgon</h3>
                            <span className='designation'>President</span>

                            <p className='team-about mt-5 hover:text-white-500 px-5'>"Lorem ipsum dolor sit amet consectetur adipiskkn."</p>
                          </div>
                        </div>

                        <ul className="sci">
                        <li>
                          <a href=""><i class="uil uil-instagram"></i></a>
                        </li>

                        <li>
                          <a href=""><i class="uil uil-linkedin"></i></a>
                        </li>
                      </ul>

                      </div>


                      <div className="card cursor-pointer group-hover:blur-sm hover:!blur-none">
                        <div className="content-card">
                          <div className="img">
                            <img src={slide_image_6} alt="" />
                          </div>
                          <div className="content-box">
                            <h3>Salman Khan</h3>
                            <span className='designation'>Vice-President</span>
                            <p className='team-about mt-5 hover:text-white-500 px-5'>"Lorem ipsum dolor sit amet consectetur adipiskkn."</p>
                          </div>
                        </div>

                        <ul className="sci">
                        <li>
                          <a href=""><i class="uil uil-instagram"></i></a>
                        </li>

                        <li>
                          <a href=""><i class="uil uil-linkedin"></i></a>
                        </li>
                      </ul>

                      </div>

                    
                    </div>





                            {/* Design section Ends from here */}


                            </div>
                          </section>
                        </div>
                        </div>
                    </div>


                    

            </div>
        </div>
  )
}

export default Members