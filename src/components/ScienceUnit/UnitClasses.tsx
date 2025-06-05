import React from 'react';
import arrow from '../../assets/images/Vector (8).png';
import vid from '../../assets/images/Youtube player.png';

const UnitClasses = () => {
  return (
    <div className="order-last grid gap-6 text-black md:order-first md:col-span-2">
      <article className="flex items-start justify-between gap-10 rounded-4xl bg-white p-8 shadow-[var(--Shadow)]">
        <div className="grid h-full items-center gap-5">
          <h1 className="text-xl font-semibold">اسم الدرس الأول</h1>
          <p className="max-w-full text-sm font-medium text-[#696969]">
            في هذا الدرس الممتع والمليء بالتجارب، هنتعلم مع بعض إزاي نفهم
            الطبيعة، ونعرف إزاي جسم الإنسان بيشتغل، وهنشوف الفرق بين الحيوانات
            والنباتات، وكمان هنتعرف على الكهرباء والمغناطيس بطريقة بسيطة وسهلة!
          </p>
        </div>
        <div className="flex min-h-10 min-w-10 items-center justify-center rounded-full bg-[#E9E9E9]">
          <img src={arrow} alt="arrow" />
        </div>
      </article>
      <article className="flex items-start justify-between gap-10 rounded-4xl bg-white p-8 shadow-[var(--Shadow)]">
        <div className="grid h-full items-center gap-5">
          <h1 className="text-xl font-semibold">اسم الدرس الثاني</h1>
          <p className="max-w-full text-sm font-medium text-[#696969]">
            في هذا الدرس الممتع والمليء بالتجارب، هنتعلم مع بعض إزاي نفهم
            الطبيعة، ونعرف إزاي جسم الإنسان بيشتغل، وهنشوف الفرق بين الحيوانات
            والنباتات، وكمان هنتعرف على الكهرباء والمغناطيس بطريقة بسيطة وسهلة!
          </p>
          <img src={vid} alt="vid" />
        </div>
        <div className="flex min-h-10 min-w-10 rotate-180 items-center justify-center rounded-full bg-[#E9E9E9]">
          <img src={arrow} alt="arrow" />
        </div>
      </article>
    </div>
  );
};

export default UnitClasses;
