import React from 'react';
import Card from './Card';
import './Card.css'
import {slide_image_1,slide_image_2,slide_image_3,slide_image_4,slide_image_5,slide_image_6,slide_image_7,slide_image_8,
  slide_image_9,slide_image_10,slide_image_11,slide_image_12} from '../assets';

const member = [
  {
    img : slide_image_1,
    name : "UnKnown ",
    designation : "Joint Secratory",
    description : "Lorem ipsum dolor sit amet consectetur adipiskkn.",
    link : "#",
    inst : "#",
  },
  {
    img : slide_image_1,
    name : "UnKnown ",
    designation : "Joint Secratory",
    description : "Lorem ipsum dolor sit amet consectetur adipiskkn.",
    link : "#",
    inst : "#",
  },
  {
    img : slide_image_1,
    name : "UnKnown ",
    designation : "Joint Secratory",
    description : "Lorem ipsum dolor sit amet consectetur adipiskkn.",
    link : "#",
    inst : "#",
  },
]

function Members() {
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

                          <div className="title-team  ">Our Team</div>
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
                        <section className='tab-content w-[100%]'>

                          {/* All members section Starts here */}
                          <div className="card-layout grid md:grid-cols-2 lg:grid-cols-3">                            
                                {member.map((members , index) => (
                                  <div className="member-content content-1">
                                    <Card img = {members.img} name = {members.name} designation = {members.designation} description = {members.description} />
                                  </div> 
                                ))}         
                          </div>
                          {/* All members section Ends here  */}

                          {/*Lead section Starts here */}
                          <div className="card-layout grid md:grid-cols-2 lg:grid-cols-3">                             
                                {member.map((members , index) => (
                                  <div className="member-content content-2">
                                    <Card img = {members.img} name = {members.name} designation = {members.designation} description = {members.description} />
                                  </div> 
                                ))}         
                          </div>
                          {/* Lead section Ends here  */}

                          {/* Tech section Starts here */}
                          <div className="card-layout grid md:grid-cols-2 lg:grid-cols-3">                            
                                {member.map((members , index) => (
                                  <div className="member-content content-3">
                                    <Card img = {members.img} name = {members.name} designation = {members.designation} description = {members.description} />
                                  </div> 
                                ))}         
                          </div>
                          {/* Tech section Ends here  */}

                          {/* Content section Starts here */}                         
                          <div className="card-layout grid md:grid-cols-2 lg:grid-cols-3">                            
                                {member.map((members , index) => (
                                  <div className="member-content content-4">
                                    <Card img = {members.img} name = {members.name} designation = {members.designation} description = {members.description} />
                                  </div> 
                                ))}         
                          </div>
                          {/*Content section Ends here  */}

                          {/* PR section Starts here */}
                          <div className="card-layout grid md:grid-cols-2 lg:grid-cols-3">                           
                                {member.map((members , index) => (
                                  <div className="member-content content-5">
                                    <Card img = {members.img} name = {members.name} designation = {members.designation} description = {members.description} />
                                  </div> 
                                ))}         
                          </div>
                          {/* PR section Ends here  */}

                          {/* Design section Starts here */}
                          <div className="card-layout grid md:grid-cols-2 lg:grid-cols-3">                           
                                {member.map((members , index) => (
                                  <div className="member-content content-6">
                                    <Card img = {members.img} name = {members.name} designation = {members.designation} description = {members.description} />
                                  </div> 
                                ))}         
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
