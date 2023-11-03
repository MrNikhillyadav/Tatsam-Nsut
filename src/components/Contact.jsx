import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="md:px-20 md:pb-20 px-5 pb-10 flex flex-col overflow-x-hidden">
            <div>
                <h1 className="w-full text-center text-[30px] md:text-[45px] mb-5 font-bold text-orange-500">
                    Contact Us !
                    <div className="underline ml-auto mr-auto"></div>
                </h1>
            </div>

            <div className="flex  mr-auto ml-auto gap-20 shadow-lg shadow-indigo-500/40 rounded-lg">
                <div className="px-10 md:px-10 py-5 flex flex-col gap-5 mt-2">
                  <h3 className="text-[22px] md:text-[26x] text-center">Have a Problem ? Message Us</h3>
                    <div className="flex md:gap-5 flex-col md:flex-row gap-5">
                    <input className='outline-none bg-[#f5f5f5] w-[100%] md:w-[50%] p-[8px] md:p-[12px]' type="text" name="" placeholder='Enter Name' id="" />
                    <input className='bg-[#f5f5f5] outline-none  md:w-[50%] w-[100%] p-[8px] md:p-[12px]' type="email" name="" placeholder='Email' id="" />
                    </div>
                    <input className='bg-[#f5f5f5] p-[8px] md:p-[12px] outline-none' type="text" name="" placeholder='Subject' id="" />
                    <textarea className="bg-[#f5f5f5] outline-none p-[8px] md:p-[12px] "placeholder='Message' name="" id="" cols="30" rows="5"></textarea>
                    <button className="py-2 hover:origin-top-left hover:rotate-45  duration-1000 outline-none shadow-lg shadow-indigo-500/40  w-[120px] ml-auto mr-auto rounded-xl text-xl text-white font-semi-bold font-serif  bg-orange-500"><a href="#">Submit</a></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact