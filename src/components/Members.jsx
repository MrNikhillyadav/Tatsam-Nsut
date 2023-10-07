import React from 'react';
import Card from './Card';
import './Card.css'

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

                          {/* All members section Starts here */}

                          <div className="card-layout grid lg:grid-cols-3 md:grid-cols-2">
                             <div className="member-content content-1">
                                <Card img = {slide_image_1} name = "Akshay Kumar" designation = "Joint Secratory" description = "Lorem ipsum dolor sit amet consectetur adipiskkn."/> 
                              </div>

                              <div className="member-content content-1">
                                <Card img = {slide_image_2} name = "Ajay Devgon" designation = "Joint Secratory" description = "Lorem ipsum dolor sit amet consectetur adipiskkn."/> 
                              </div>

                              <div className="member-content content-1">
                                <Card img = {slide_image_3} name = "Salman Khan" designation = "Joint Secratory" description = "Lorem ipsum dolor sit amet consectetur adipiskkn."/> 
                              </div>    
                          </div>

                          {/* All members section Ends here  */}

                          {/*Lead section Starts here */}

                          <div className="card-layout grid lg:grid-cols-3 md:grid-cols-2">
                             <div className="member-content content-2">
                                <Card img = {slide_image_4} name = "Akshay Kumar" designation = "Joint Secratory" description = "Lorem ipsum dolor sit amet consectetur adipiskkn."/> 
                              </div>

                              <div className="member-content content-2">
                                <Card img = {slide_image_5} name = "Ajay Devgon" designation = "Joint Secratory" description = "Lorem ipsum dolor sit amet consectetur adipiskkn."/> 
                              </div>

                              <div className="member-content content-2">
                                <Card img = {slide_image_6} name = "Salman Khan" designation = "Joint Secratory" description = "Lorem ipsum dolor sit amet consectetur adipiskkn."/> 
                              </div>    
                          </div>

                          {/* Lead section Ends here  */}

                          {/* Tech section Starts here */}

                          <div className="card-layout grid lg:grid-cols-3 md:grid-cols-2">
                             <div className="member-content content-3">
                                <Card img = {slide_image_7} name = "Akshay Kumar" designation = "Joint Secratory" description = "Lorem ipsum dolor sit amet consectetur adipiskkn."/> 
                              </div>

                              <div className="member-content content-3">
                                <Card img = {slide_image_8} name = "Ajay Devgon" designation = "Joint Secratory" description = "Lorem ipsum dolor sit amet consectetur adipiskkn."/> 
                              </div>

                              <div className="member-content content-3">
                                <Card img = {slide_image_9} name = "Salman Khan" designation = "Joint Secratory" description = "Lorem ipsum dolor sit amet consectetur adipiskkn."/> 
                              </div>    
                          </div>

                          {/* Tech section Ends here  */}

                          {/* Content section Starts here */}

                          <div className="card-layout grid lg:grid-cols-3 md:grid-cols-2">
                             <div className="member-content content-4">
                                <Card img = {slide_image_10} name = "Akshay Kumar" designation = "Joint Secratory" description = "Lorem ipsum dolor sit amet consectetur adipiskkn."/> 
                              </div>

                              <div className="member-content content-4">
                                <Card img = {slide_image_11} name = "Ajay Devgon" designation = "Joint Secratory" description = "Lorem ipsum dolor sit amet consectetur adipiskkn."/> 
                              </div>

                              <div className="member-content content-4">
                                <Card img = {slide_image_12} name = "Salman Khan" designation = "Joint Secratory" description = "Lorem ipsum dolor sit amet consectetur adipiskkn."/> 
                              </div>    
                          </div>

                          {/*Content section Ends here  */}

                          {/* PR section Starts here */}

                          <div className="card-layout grid lg:grid-cols-3 md:grid-cols-2">
                             <div className="member-content content-5">
                                <Card img = {slide_image_1} name = "Akshay Kumar" designation = "Joint Secratory" description = "Lorem ipsum dolor sit amet consectetur adipiskkn."/> 
                              </div>

                              <div className="member-content content-5">
                                <Card img = {slide_image_2} name = "Ajay Devgon" designation = "Joint Secratory" description = "Lorem ipsum dolor sit amet consectetur adipiskkn."/> 
                              </div>

                              <div className="member-content content-5">
                                <Card img = {slide_image_3} name = "Salman Khan" designation = "Joint Secratory" description = "Lorem ipsum dolor sit amet consectetur adipiskkn."/> 
                              </div>    
                          </div>

                          {/* PR section Ends here  */}

                          {/* Design section Starts here */}

                          <div className="card-layout grid lg:grid-cols-3 md:grid-cols-2">
                             <div className="member-content content-6">
                                <Card img = {slide_image_4} name = "Akshay Kumar" designation = "Joint Secratory" description = "Lorem ipsum dolor sit amet consectetur adipiskkn."/> 
                              </div>

                              <div className="member-content content-6">
                                <Card img = {slide_image_5} name = "Ajay Devgon" designation = "Joint Secratory" description = "Lorem ipsum dolor sit amet consectetur adipiskkn."/> 
                              </div>

                              <div className="member-content content-6">
                                <Card img = {slide_image_6} name = "Salman Khan" designation = "Joint Secratory" description = "Lorem ipsum dolor sit amet consectetur adipiskkn."/> 
                              </div>    
                          </div>

                          {/* Design section Ends here  */}
                          

                        </section>
                      </div>
                      </div>
                    </div>

                               

            </div>
        </div>
  )
}

export default Members