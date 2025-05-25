import React from 'react'
import Name from './Name'
import Statis from './Statis'
import Points from './Points'

const Profile = () => {
  return (
    <section className='max-w-[var(--container)] mx-auto bg-white shadow-[var(--Shadow)]  rounded-2xl mt-[var(--SecMt)]'>
        <div className='px-7 py-14 w-full'>
            <div className='flex justify-between items-center flex-wrap gap-10'>
                <Name/>
                <Statis/>
            </div>
            <div className='flex mt-20 justify-between gap-10 md:gap-[7.5%] items-center md:flex-nowrap flex-wrap'>
                <Points/>
                <Points/>

            </div>
        </div>

    </section>
  )
}

export default Profile