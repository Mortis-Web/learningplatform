import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='w-full sticky z-10 bg-white top-0 leading-9 left-0 shadow-sm py-2.5 sm:py-5'>
      <ul className='flex max-w-[var(--container)] justify-between items-baseline mx-auto px-4'>
        <li>    <h1 className='text-3xl font-semibold '>لوجو</h1>
</li>
        <li className='hidden sm:block'>    <Nav/>
</li>
        <li>    <button type='button' className='text-sm  md:text-lg leading-6 text-white bg-[var(--ButtonColor)] py-4 px-6 rounded-2xl  font-semibold '>تسجيل الخروج</button>
</li>
      </ul>
    </div>
  )
}

export default Header