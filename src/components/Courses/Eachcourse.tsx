import React from 'react'
import book from "../../assets/images/Vector (10).png"
const Eachcourse = () => {
  return (
        <article className='bg-white rounded-2xl p-4 shadow-[var(--Shadow)] space-y-4'>
            <div className='flex gap-4 items-center'>
                <div className='w-[65px] h-[65px] bg-blue-100 rounded-full flex justify-center items-center'>
                    <img src={book} alt="book" />
                </div>
                    <h1 className='font-semibold text-[1rem]'>الجبر</h1>
            </div>
            <div className='flex gap-4 items-center'>
                <div className='rounded-full bg-[#F4F4F4] h-1.5 w-full relative'>
                    <span className="absolute right-0 top-0 bg-[var(--ButtonColor)] rounded-[inherit] h-full w-3/4"></span>
                </div>
                <h1 className='text-[10px] font-medium min-w-[50px]'>10/15 درس</h1>

            </div>
            <p className='text-[11px] font-medium' >تعلم المفاهيم الاساسية في الرياضيات للمرحله الابتدائية</p>
            <div className=' flex gap-2.5'>
            <span className='bg-[#D6A0061A] rounded-[2px] py-[2px] px-[4px] text-[#D6A006] font-medium text-[9px]  '>23 درس</span>
                        <span className='bg-[#D153571A] rounded-[2px] py-[2px] px-[4px] text-[#D15357] font-medium text-[9px]  '>12اسبوع</span>
            <span className='bg-[#41B4671A] rounded-[2px] py-[2px] px-[4px] text-[#41B467] font-medium text-[9px]'>50 طالب</span>

            </div>
          <div className='w-full flex justify-end'>  <button type='button' className='rounded-lg py-1.5 px-2.5 bg-[var(--ButtonColor)] text-sm font-medium text-white block'>عرض الكورس</button>
</div>
        </article>
  )
}

export default Eachcourse