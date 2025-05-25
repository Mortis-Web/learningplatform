import React from 'react'
import { NavLink } from 'react-router-dom'
import eye from "../../assets/images/censored.png"


const Signin = () => {
  return (
     <form action="/" className="grid gap-5">
         <div>
          <h1 className="text-[var(--ButtonColor)] text-3xl font-semibold">ابدأ رحلتك معنا</h1>
          <h6 className="text-[#7A7A7A] text-lg font-medium mt-2 max-w-full [white-space:nowrap]">أنشئ حسابًا لبدء الدروس التعليمية الممتعة للأطفال.</h6>
         </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[1rem] font-semibold "> الاسم</label>
            <input type="text" id="name" className="rounded-2xl shadow-[var(--Shadow)] py-2 px-4" required  />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[1rem] font-semibold ">البريد الالكتروني</label>
            <input type="email" id="email" className="rounded-2xl shadow-[var(--Shadow)] py-2 px-4" required  />
          </div>

          <div className="flex flex-col gap-2 relative">
            <span className="absolute left-0 top-1/2 translate-2.5 z-10 w-fit h-fit "><img src={eye} alt="eye" /></span>
            <label htmlFor="password" className="text-[1rem] font-semibold ">كلمة المرور</label>
            <input type="password" id="password" className="rounded-2xl shadow-[var(--Shadow)] py-2 px-4 " required  />
          </div>
               <div className="flex flex-col gap-2 relative">
            <span className="absolute left-0 top-1/2 translate-2.5 z-10 w-fit h-fit "><img src={eye} alt="eye" /></span>
            <label htmlFor="password" className="text-[1rem] font-semibold ">تأكيد كلمة المرور</label>
            <input type="password" id="confirmPassword" className="rounded-2xl shadow-[var(--Shadow)] py-2 px-4 " required  />
          </div>
     <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[1rem] font-semibold "> الصف الدراسي</label>
            <input type="number" id="grade" className="rounded-2xl shadow-[var(--Shadow)] py-2 px-4" required  />
          </div>
          <div>
           <button type="submit"className="text-[1rem] font-semibold rounded-2xl py-4 min-w-full mx-auto block bg-[var(--ButtonColor)] text-white">تسجيل الدخول</button>
           <h6 className="text-sm font-medium text-[#7A7A7A] text-center mt-4">هل سبق لك التسجيل؟<NavLink to="/login"> <span className="text-[var(--ButtonColor)] mr-1">تسجيل الدخول</span></NavLink></h6>
          </div>


        </form>
  )
}

export default Signin