import React from 'react'
import img from "../../assets/images/I hope your day.png";
import star from "../../assets/images/Star.png"
import crown from "../../assets/images/Vector (11).png"

const Champs = () => {
  return (
    <div className='flex gap-3 '>

    <article className='flex flex-col w-full justify-center items-center gap-4'>
        <div className='w-[60px] h-[60px] rounded-full bg-pink-200 overflow-hidden'>
<img src={img} alt="user"/>
        </div>
        <span className='rounded-xl py-2 px-3 bg-[var(--ButtonColor)] text-white font-medium text-center'>700 نقطة</span>
        <div className='font-semibold text-[60px]  w-full text-white relative  mt-4 isolate'>
            <span className='h-24 block bg-[#608BE9] w-full absolute left-0 -top-[76px]  -translate-y-5 z-[-1] clip  '></span>
            <span className='min-h-[124px] block text-center bg-[var(--ButtonColor)] w-full pt-2.5 '>3</span>
        </div>
    </article>
        <article className='flex relative flex-col w-full justify-center items-center gap-4'>
            <span className='absolute left-1/2 -top-5 flex justify-center items-center  '><img src={star} alt="star"/> <img src={crown} alt="crown" className='absolute'/></span>
        <div className='w-[60px] h-[60px] rounded-full bg-pink-400 overflow-hidden'>
<img src={img} alt="user"/>
        </div>
        <span className='rounded-xl py-2 px-3 bg-[var(--ButtonColor)] text-white font-medium text-center'>1000 نقطة</span>
        <div className='font-semibold text-[100px] relative  w-full text-white mt-4 isolate'>
            <span className='h-24 block bg-[#608BE9] w-full absolute left-0 -top-[76px]  -translate-y-5 z-[-1] clip  '></span>
            <span className='min-h-[250px] block text-center bg-gradient-to-b from-[var(--ButtonColor)] to-[#B3C5ED] w-full '>1</span>
        </div>
    </article>  
        <article className='flex flex-col w-full justify-center items-center gap-4'>
        <div className='w-[60px] h-[60px] rounded-full bg-pink-300 overflow-hidden'>
<img src={img} alt="user"/>
        </div>
        <span className='rounded-xl py-2 px-3 bg-[var(--ButtonColor)] text-white font-medium text-center'>700 نقطة</span>
        <div className='font-semibold text-[80px]  w-full relative text-white mt-4 isolate'>
            <span className='h-24 block bg-[#608BE9] w-full absolute left-0 -top-[76px] -translate-y-5 z-[-1]  clip'></span>
            <span className='min-h-[164px] block text-center bg-[var(--ButtonColor)] w-full '>2</span>
        </div>
    </article>


    </div>
  )
}

export default Champs