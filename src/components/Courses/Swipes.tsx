import React from 'react'
import arrow from "../../assets/images/Vector (8).png"


const Swipes = () => {
  return (
    <article className='max-h-fit flex-wrap flex gap-8 items-center justify-center max-w-[var(--container)] mx-auto my-[calc(var(--SecMt)*1.5)]'>
      <span className='flex items-center gap-2 text-black'>
        <button className='min-w-10 min-h-10 bg-[#E9ECEF] rounded-lg shadow-[var(--Shadow)] text-sm font-medium flex items-center justify-center border border-transparent hover:border-[#1847AE] hover:text-[#1847AE] '>&lt;</button>

        <button className='min-w-10 min-h-10 bg-white rounded-lg shadow-[var(--Shadow)] text-sm font-medium flex items-center justify-center border border-transparent hover:border-[#1847AE] hover:text-[#1847AE] '>1</button>
        <button className='min-w-10 min-h-10 bg-white rounded-lg shadow-[var(--Shadow)] text-sm font-medium flex items-center justify-center border border-transparent hover:border-[#1847AE] hover:text-[#1847AE] '>2</button>
        <button className='min-w-10 min-h-10 bg-white rounded-lg shadow-[var(--Shadow)] text-sm font-medium flex items-center justify-center border border-transparent hover:border-[#1847AE] hover:text-[#1847AE] '>3</button>
        <button className='min-w-10 min-h-10 bg-white rounded-lg shadow-[var(--Shadow)] text-sm font-medium flex items-center justify-center border border-transparent hover:border-[#1847AE] hover:text-[#1847AE] '>4</button>
        <button className='min-w-10 min-h-10 bg-[#E9ECEF] rounded-lg shadow-[var(--Shadow)] text-sm font-medium flex items-center justify-center border border-transparent hover:border-[#1847AE] hover:text-[#1847AE] '>&gt;</button>

      </span>
<span className='flex gap-2 text-sm font-normal items-center'>
  <label>الصفحة/</label>
  <select  name="pages" id="search" className='min-w-[140px] rounded-lg px-3 py-2 bg-white [direction:ltr] shadow-[var(--Shadow)] appearance-none '>
      <option value="10">10</option>
      <option value="9">9</option>
      <option value="8">8</option>
      <option value="7">7</option>

</select> 
        <span className='block absolute right-0 top-0 h-5 w-5 bg-red-400 '><img src={arrow} alt="dropdown" /></span>

</span>

    </article>
  )
}

export default Swipes