import React from 'react';
import img from '../../assets/images/OBJECTS.png';
import clock from '../../assets/images/clock.png';

const UnitIntro = () => {
  return (
    <div className="flex min-h-[380px] w-full items-center justify-center bg-gradient-to-l from-[var(--ButtonColor)] to-[#0A1D48] py-4">
      <div className="mx-auto flex h-full w-full max-w-[var(--container)] flex-wrap items-center justify-between gap-10 md:flex-nowrap">
        <article className="grid max-w-[680px] gap-8 text-white">
          <h1 className="text-[2rem] font-semibold">وحدة العلوم</h1>
          <p className="max-w-full text-sm font-light">
            في هذا الكورس الممتع والمليء بالتجارب، هنتعلم مع بعض إزاي نفهم
            الطبيعة، ونعرف إزاي جسم الإنسان بيشتغل، وهنشوف الفرق بين الحيوانات
            والنباتات، وكمان هنتعرف على الكهرباء والمغناطيس بطريقة بسيطة وسهلة!
          </p>
          <span className="flex items-center gap-10">
            <div className="flex gap-2 text-[12.5px] font-normal">
              <img className="max-h-6 max-w-6 p-1" src={clock} alt="clock" />
              <h6>الاستاذ/ محمد احمد</h6>
            </div>
            <div className="flex gap-2 text-[12.5px] font-normal">
              <img className="max-h-6 max-w-6 p-1" src={clock} alt="clock" />
              <h6>الاستاذ/ محمد احمد</h6>
            </div>{' '}
            <div className="flex gap-2 text-[12.5px] font-normal">
              <img className="max-h-6 max-w-6 p-1" src={clock} alt="clock" />
              <h6>الاستاذ/ محمد احمد</h6>
            </div>
          </span>
          <div className="grid gap-1">
            <span className="relative isolate h-2.5 w-full rounded-full bg-white">
              <span className="absolute top-0 right-0 h-full w-[20%] rounded-[inherit] bg-[#3C9700]"></span>
            </span>
            <h6 className="text-sm font-medium">20%</h6>
          </div>
        </article>
        <div className="mx-auto min-h-[320px] min-w-[340px] md:m-0">
          <img
            className="h-full w-full object-cover"
            src={img}
            alt="scienceImg"
          />
        </div>
      </div>
    </div>
  );
};

export default UnitIntro;
