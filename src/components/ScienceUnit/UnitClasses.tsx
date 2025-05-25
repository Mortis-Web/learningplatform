import React from 'react'
import arrow from "../../assets/images/Vector (8).png"
import vid from "../../assets/images/Youtube player.png"

const UnitClasses = () => {
  return (
<div className='md:col-span-2 text-black grid gap-6 order-last md:order-first	'>
<article className='bg-white rounded-4xl shadow-[var(--Shadow)] flex items-start justify-between p-8 gap-10 '>
    <div className='grid gap-5 h-full items-center'>
        <h1 className='font-semibold text-xl'>اسم الدرس الأول</h1>
        <p className='font-medium text-sm max-w-full text-[#696969]'>في هذا الدرس الممتع والمليء بالتجارب، هنتعلم مع بعض إزاي نفهم الطبيعة، ونعرف إزاي جسم الإنسان بيشتغل، وهنشوف الفرق بين الحيوانات 
والنباتات،  وكمان هنتعرف على الكهرباء والمغناطيس بطريقة بسيطة وسهلة!</p>
    </div>
    <div className='min-w-10 min-h-10 rounded-full flex justify-center items-center bg-[#E9E9E9]'>
        <img src={arrow} alt="arrow"/>
    </div>
</article>
<article className='bg-white rounded-4xl shadow-[var(--Shadow)] flex items-start justify-between p-8 gap-10'>
    <div className='grid gap-5 h-full items-center'>
        <h1 className='font-semibold text-xl'>اسم الدرس الثاني</h1>
        <p className='font-medium text-sm max-w-full text-[#696969]'>في هذا الدرس الممتع والمليء بالتجارب، هنتعلم مع بعض إزاي نفهم الطبيعة، ونعرف إزاي جسم الإنسان بيشتغل، وهنشوف الفرق بين الحيوانات 
والنباتات،  وكمان هنتعرف على الكهرباء والمغناطيس بطريقة بسيطة وسهلة!</p>
<img src={vid} alt="vid" />
    </div>
    <div className='min-w-10 min-h-10 rounded-full flex justify-center items-center bg-[#E9E9E9] rotate-180'>
        <img src={arrow} alt="arrow"/>
    </div>
</article>
</div>  )
}

export default UnitClasses