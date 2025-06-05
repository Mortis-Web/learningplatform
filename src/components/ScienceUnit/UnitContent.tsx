import React from 'react';
import play from '../../assets/images/Play.png';
const UnitContent = () => {
  return (
    <div className="rounded-[40px] bg-white shadow-[var(--Shadow)] md:col-span-1">
      <ul className="h-full w-full text-black">
        <li className="w-full p-8 text-2xl font-semibold whitespace-nowrap">
          محتوى الوحدة
        </li>
        <li className="w-full border-t border-[#00000040] p-8 text-sm font-semibold">
          <div className="flex gap-3">
            <input type="checkbox" name="check" id="check" />

            <h6>1.اسم الدرس الاول</h6>
          </div>
          <span className="flex items-center gap-2 font-medium">
            <img src={play} alt="play" className="h-3 w-3" />

            <h6>15 دقيقة</h6>
          </span>
        </li>
        <li className="w-full border-t border-[#00000040] p-8 text-sm font-semibold text-[var(--ButtonColor)]">
          <div className="flex gap-3">
            <input type="checkbox" name="check" id="check" />

            <h6>1.اسم الدرس الاول</h6>
          </div>
          <span className="flex items-center gap-2 font-medium">
            <img src={play} alt="play" className="h-3 w-3" />

            <h6>15 دقيقة</h6>
          </span>
        </li>
        <li className="w-full border-t border-[#00000040] p-8 text-sm font-semibold">
          <div className="flex gap-3">
            <input type="checkbox" name="check" id="check" />

            <h6>1.اسم الدرس الاول</h6>
          </div>
          <span className="flex items-center gap-2 font-medium">
            <img src={play} alt="play" className="h-3 w-3" />

            <h6>15 دقيقة</h6>
          </span>
        </li>
        <li className="w-full border-t border-[#00000040] p-8 text-sm font-semibold">
          <div className="flex gap-3">
            <input type="checkbox" name="check" id="check" />

            <h6>1.اسم الدرس الاول</h6>
          </div>
          <span className="flex items-center gap-2 font-medium">
            <img src={play} alt="play" className="h-3 w-3" />

            <h6>15 دقيقة</h6>
          </span>
        </li>
        <li className="w-full border-t border-[#00000040] p-8 text-sm font-semibold">
          <div className="flex gap-3">
            <input type="checkbox" name="check" id="check" />

            <h6>1.اسم الدرس الاول</h6>
          </div>
          <span className="flex items-center gap-2 font-medium">
            <img src={play} alt="play" className="h-3 w-3" />

            <h6>15 دقيقة</h6>
          </span>
        </li>
        <li className="w-full border-t border-[#00000040] p-8 text-sm font-semibold">
          <div className="flex gap-3">
            <input type="checkbox" name="check" id="check" />

            <h6>1.اسم الدرس الاول</h6>
          </div>
          <span className="flex items-center gap-2 font-medium">
            <img src={play} alt="play" className="h-3 w-3" />

            <h6>15 دقيقة</h6>
          </span>
        </li>
        <li className="w-full border-t border-[#00000040] p-8 text-sm font-semibold">
          <div className="flex gap-3">
            <input type="checkbox" name="check" id="check" />

            <h6>1.اسم الدرس الاول</h6>
          </div>
          <span className="flex items-center gap-2 font-medium">
            <img src={play} alt="play" className="h-3 w-3" />

            <h6>15 دقيقة</h6>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default UnitContent;
