import React from 'react'
import happy from "../../assets/Vector (2).png"
import page from "../../assets/Vector (4).png"
import book from "../../assets/Vector (5).png"

const Statis = () => {
  return (
    <div className='flex gap-8 flex-wrap justify-between items-center'>
    <article className='flex gap-4 justify-center items-center text-center'>
        <div className='w-[60px] h-[60px] bg-[#D6A0061A] rounded-full flex justify-center items-center'>
            <img src={happy} alt="happy" className='outline-[1px]  outline-[#D6A006] rounded-full outline-offset-4' />
        </div>
        <div><h1 className='text-xl font-semibold'>المعدل</h1>
            <h1 className='text-xl font-semibold'>92.5%</h1>
        </div>
    </article>
     <article className='flex gap-4 justify-center items-center text-center'>
        <div className='w-[60px] h-[60px] bg-[#D153571A] rounded-full flex justify-center items-center'>
            <img src={book} alt="happy" className=' rounded-full' />
        </div>
        <div><h1 className='text-xl font-semibold'>الكورسات</h1>
            <h1 className='text-xl font-semibold'>10</h1>
        </div>
    </article>
     <article className='flex gap-4 justify-center items-center text-center'>
        <div className='w-[60px] h-[60px] bg-[#41B4671A] rounded-full flex justify-center items-center'>
            <img src={page} alt="happy" className=' rounded-full ' />
        </div>
        <div><h1 className='text-xl font-semibold'>الواجبات</h1>
            <h1 className='text-xl font-semibold'>10/12</h1>
        </div>
    </article>
    </div> 
    
  )
}

export default Statis