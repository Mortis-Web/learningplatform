import React from 'react'
import Champs from './Champs'
import Lowerchamps from './Lowerchamps'

const Testimonial = () => {
  return (
        <div className='shadow-[var(--Shadow)] col-span-1 rounded-4xl py-9 px-6 bg-white max-h-fit '>
          <h1 className='text-2xl font-semibold text-center pb-8'>لوحة المتصدرين</h1>
          <Champs/>
              <div className='bg-[#E1EBFF] w-full mt-[-90px] gap-4 grid rounded-4xl p-4 min-h-[400px] relative z-1'>
          <Lowerchamps/>
          <Lowerchamps/>
          <Lowerchamps/>
          <Lowerchamps/>


              </div>


        </div>

  )
}

export default Testimonial