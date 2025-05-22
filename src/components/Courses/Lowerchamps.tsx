import React from 'react'
import img from "../../assets/I hope your day.png";

const Lowerchamps = () => {
  return (
    <article className="rounded-[20px] bg-white py-2.5 px-4 flex items-center">
        <div className='flex items-center gap-4'>
            <span className='w-5 h-5 bg-[#E6E6E6] rounded-full flex justify-center items-center font-medium'>4</span>
              <div className='w-[60px] h-[60px] rounded-full bg-pink-200 overflow-hidden'>
<img src={img} alt="user"/>
        </div>
        <div>
            <h1 className='text-sm font-medium'>ندي محمد</h1>
            <h2 className='text-[12px] font-normal text-[#858494]'>500نقطة</h2>
        </div>

        </div>

    </article>
  )
}

export default Lowerchamps