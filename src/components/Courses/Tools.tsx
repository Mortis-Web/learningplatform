import React from 'react'
import list from "../../assets/images/Vector (6).png"
import grid from "../../assets/images/Vector (7).png"
import arrow from "../../assets/images/Vector (8).png"


const Tools = () => {
  return (
<div className='flex justify-between items-center text-xl flex-wrap  gap-8'>
            <h1 className='font-semibold'>الدورات</h1>
            <div className='flex gap-4 '>
                <div className='w-[50px] h-[50px] bg-white rounded-lg shadow-[var(--Shadow)] flex justify-center items-center cursor-pointer select-none'>
                <img src={grid} alt="grid" />
                </div>
                <div  className='w-[50px] h-[50px] bg-white rounded-lg shadow-[var(--Shadow)]  flex justify-center items-center cursor-pointer select-none'>
                <img src={list} alt="list" />
                </div>
                <div className='flex justify-between bg-white items-center min-w-[150px] sm:min-w-[190px]  px-5 py-2 rounded-2xl shadow-[var(--Shadow)] cursor-pointer select-none'>
                    <h1>المادة</h1> 
                    <img src={arrow} alt="arrow" className='w-2.5 h-1.5' />
                </div>

            </div>
        </div>  )
}

export default Tools