import React from 'react'
import img from "../../assets/images/I hope your day.png"

const Name = () => {
  return (
    <div className='flex items-center gap-5'>
        <div className='relative'>

        <div className='w-[80px] h-[80px] flex overflow-hidden rounded-full bg-blue-200'>
        <img src={img} alt="user"  />
        <span className="absolute h-6 w-6 bg-[#FFC300] bottom-0 left-0 font-semibold flex justify-center items-center m-auto rounded-full text-white text-shadow-2xs text-sm">3</span>
        </div>
        </div>
        <h1 className='text-2xl font-bold'>مرحبا ندي</h1>
    </div>
  )
}

export default Name