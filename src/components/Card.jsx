import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="container-member ">
                    <div className="card cursor-pointer group-hover:blur-sm hover:!blur-none">
                        <div className="content-card">
                          <div className="img">
                            <img src={props.img} alt="" />
                          </div>
                          <div className="content-box">
                            <h3>{props.name}</h3>
                            <span className='designation'>{props.designation}</span>
                            <p className='team-about mt-5 hover:text-white-500 px-5'>{props.description}</p>
                          </div>
                        </div>
                        <ul className="sci">
                        <li>
                          <a href={props.link}><i class="uil uil-instagram"></i></a>
                        </li>
                        <li>
                          <a href={props.inst}><i class="uil uil-linkedin"></i></a>
                        </li>
                      </ul>
                      </div>
                    </div>
    </div>
  )
}

export default Card
