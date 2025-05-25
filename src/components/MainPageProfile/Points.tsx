import React from 'react'

const Points = () => {
  return (
    <article className='w-full'>
        <div className='flex justify-between  items-center'>
            <h1 className='text-[1rem] font-medium'>تقدم المستوي</h1>
            <h1 className='text-[1rem] font-medium'>100/350 نقطة</h1>
        </div>
        <div className="h-2.5 w-full mt-4 bg-[#F4F4F4] rounded-full relative">
            <span className='w-3/4 h-full rounded-[inherit] absolute top-0 right-0 bg-[var(--ButtonColor)] '></span>
        </div>
    </article>
  )
}

export default Points