import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="md:px-20 md:pb-20  px-5  my-24 pb-10 flex flex-col overflow-x-hidden">
            <div>
                <h1 className="w-full text-center text-[30px] font md:text-[35px]  my-5 font-bold text-[#f1af33]">
                    Contact Us
                    <div className="underline ml-auto mr-auto"></div>
                </h1>
            </div>

            <div className="flex border  border-slate-300 shadow-md mt-8 mr-auto ml-auto gap-20  rounded-2xl">
                <div className="px-5 md:px-12 py-5 flex flex-col gap-5 mt-2">
                  <h3 className=" text-sm  font-normal text-slate-400  text-center">Have a Problem ? Message Us</h3>
                    <div className="flex md:gap-5 flex-col md:flex-row gap-5">
                    <input className='border border-slate-300 rounded-lg   w-[100%] md:w-[50%] p-[8px] md:px-[12px]' type="text" name="" placeholder='Enter Name' id="" />
                    <input className='border border-slate-300 rounded-lg   md:w-[50%] w-[100%] p-[8px] md:px-[12px]' type="email" name="" placeholder='Email' id="" />
                    </div>
                    <input className=' p-[8px] md:px-[12px] border border-slate-300 rounded-lg ' type="text" name="" placeholder='Subject' id="" />
                    <textarea className="border border-slate-300 rounded-lg  p-[8px] md:px-[12px] "placeholder='Message' name="" id="" cols="30" rows="5"></textarea>
                    <button className="md:py-1 duration-1000    w-[120px] m-auto rounded-xl text-xl text-white bg-[#f1af33] shadow-md"><a className='text-sm ' href="#">Submit</a></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact