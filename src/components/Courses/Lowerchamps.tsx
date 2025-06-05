import React from 'react';
import img from '../../assets/images/I hope your day.png';

type LowerChampsTypes = {
  index: number;
  points: number;
};

const Lowerchamps = ({ index, points }: LowerChampsTypes) => {
  return (
    <article className="flex items-center rounded-[20px] bg-white px-4 py-2.5">
      <div className="flex items-center gap-4">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-sm font-medium shadow-[var(--Shadow)]">{`${index + 4}`}</span>
        <div className="h-[60px] w-[60px] overflow-hidden rounded-full bg-pink-200">
          <img src={img} alt="user" />
        </div>
        <div>
          <h1 className="text-sm font-medium">ندي محمد</h1>
          <h2 className="text-[12px] font-normal text-[#858494]">{`${Math.round(points / (index + 1))} نقطة`}</h2>
        </div>
      </div>
    </article>
  );
};

export default Lowerchamps;
