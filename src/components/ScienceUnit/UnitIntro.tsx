import React from 'react'
import img from "../../assets/images/OBJECTS.png";
import clock from "../../assets/images/clock.png";

const UnitIntro = () => {
  return (
 <div className="w-full min-h-[380px] py-4 bg-gradient-to-l to-[#0A1D48] from-[var(--ButtonColor)] ">
      <div className="max-w-[var(--container)] h-full mx-auto flex justify-between items-center gap-10 md:flex-nowrap flex-wrap">
        <article className=" text-white grid gap-8 max-w-[680px] ">
          <h1 className="font-semibold text-[2rem]">وحدة العلوم</h1>
          <p className="font-light text-sm max-w-full">
            في هذا الكورس الممتع والمليء بالتجارب، هنتعلم مع بعض إزاي نفهم
            الطبيعة، ونعرف إزاي جسم الإنسان بيشتغل، وهنشوف الفرق بين الحيوانات
            والنباتات، وكمان هنتعرف على الكهرباء والمغناطيس بطريقة بسيطة وسهلة!
          </p>
          <span className="flex items-center  gap-10">
            <div className="flex gap-2 text-sm font-normal">
              <img className="max-w-6 max-h-6 p-1" src={clock} alt="clock" />
              <h6>الاستاذ/ محمد احمد</h6>
            </div>
            <div className="flex gap-2 text-sm font-normal">
              <img className="max-w-6 max-h-6 p-1" src={clock} alt="clock" />
              <h6>الاستاذ/ محمد احمد</h6>
            </div>{" "}
        <div className="flex gap-2 text-sm font-normal">
              <img className="max-w-6 max-h-6 p-1" src={clock} alt="clock" />
              <h6>الاستاذ/ محمد احمد</h6>
            </div>
          </span>
          <div className="grid gap-1">
            <span className="rounded-full w-full bg-white h-2.5 relative isolate">
                <span className="w-[20%] h-full absolute right-0 top-0 rounded-[inherit]  bg-[#3C9700]"></span>
            </span>
            <h6 className="font-medium text-sm">20%</h6>
          </div>
        </article>
        <div className="min-h-[320px] min-w-[340px] md:m-0 mx-auto">
          <img
            className="object-cover w-full h-full"
            src={img}
            alt="scienceImg"
          />
        </div>
      </div>
    </div>  )
}

export default UnitIntro