import React from 'react'

const AllEvents = () => {
  return (
    <div className=' w-full  h-full mt-5 bg-[#eeeeee4a] '>
            <div className=' sm:max-w-[1240px]  w-full h-full   m-auto items-center    '>

                    <h1 className='font-bold text-2xl text-center text-orange-400 py-8'>Our Events</h1>

                    {/* Event-card 1*/}
                        <div className='drop-shadow-sm md:grid grid-cols-2 bg-white rounded-lg mb-8 '>
                            {/* Event-text */}
                                <div className=' p-4  flex flex-col justify-evenly '>
                                        <h1 className='font-semibold text-slate-900 text-2xl'>Brahmastra</h1>
                                        <p className=' text-left text-slate-600 text-sm'>Hands-on and introductory sessions ranging from the hottest stuff in tech, namely
                                            Blockchain and ML, to the evergreen App and Web development areas, along with 
                                            Game Development, are scheduled to be taken by seniors and mentors across DevComm..
                                        </p>
                                </div>
                                {/* Event-image */}
                                <div className=' m-4'>
                                        <img className='rounded ' src="https://media.istockphoto.com/id/628483496/photo/business-speaker-giving-a-talk-in-conference-hall.webp?b=1&s=170667a&w=0&k=20&c=KVbhjVwpQnYnRm6LBFu7PnVzuzN64RqqdkvUQ3ldGag=" alt="" />
                                </div>
                        </div>

                    {/* Event-card 2*/}
                        <div className='drop-shadow-sm md:grid grid-cols-2 bg-white rounded-lg mt-4 '>
                            {/* Event-text */}
                                <div className=' p-4 order-2 flex flex-col justify-evenly '>
                                        <h1 className='font-semibold text-slate-900 text-2xl'>Nirvaak</h1>
                                        <p className=' text-left text-slate-600 text-sm'>Hands-on and introductory sessions ranging from the hottest stuff in tech, namely
                                            Blockchain and ML, to the evergreen App and Web development areas, along with 
                                            Game Development, are scheduled to be taken by seniors and mentors across DevComm..
                                        </p>
                                </div>
                                {/* Event-image */}
                                <div className=' m-4'>
                                        <img className='rounded  ' src="https://media.istockphoto.com/id/653507556/photo/people-having-drinks-at-a-bar.webp?b=1&s=170667a&w=0&k=20&c=dQ31p4sRZ5_1DfiI09klMgOZyjFDBOkXiPwVQJduCXc=" alt="" />
                                </div>
                        </div>

                    {/* Event-card 3*/}
                        <div className='drop-shadow-sm md:grid grid-cols-2 bg-white rounded-lg mb-8 '>
                            {/* Event-text */}
                                <div className=' p-4  flex flex-col justify-evenly '>
                                        <h1 className='font-semibold text-slate-900 text-2xl'>Open Mic</h1>
                                        <p className=' text-left text-slate-600 text-sm'>Hands-on and introductory sessions ranging from the hottest stuff in tech, namely
                                            Blockchain and ML, to the evergreen App and Web development areas, along with 
                                            Game Development, are scheduled to be taken by seniors and mentors across DevComm..
                                        </p>
                                </div>
                                {/* Event-image */}
                                <div className=' m-4'>
                                        <img className='rounded ' src="https://media.istockphoto.com/id/628483496/photo/business-speaker-giving-a-talk-in-conference-hall.webp?b=1&s=170667a&w=0&k=20&c=KVbhjVwpQnYnRm6LBFu7PnVzuzN64RqqdkvUQ3ldGag=" alt="" />
                                </div>
                        </div>

            </div>

    </div>
  )
}

export default AllEvents;