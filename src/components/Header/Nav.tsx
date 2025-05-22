import React from 'react'

const Nav = () => {
  return (
    <nav>
        <ul className='flex justify-between items-center px-8 space-x-10 leading-9 h-fit'>
            <li className='text-lg text-[#1847AE] font-semibold '>الرئيسية</li>
            <li className='text-lg text-black font-semibold '>الكورسات</li>
            <li className='text-lg text-black font-semibold '>المشاريع</li>
        </ul>
    </nav>
  )
}

export default Nav