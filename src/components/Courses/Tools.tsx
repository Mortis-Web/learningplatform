import React from 'react';
import listImg from '../../assets/images/Vector (6).png';
import gridImg from '../../assets/images/Vector (7).png';
import arrow from '../../assets/images/Vector (8).png';

type gridTypes = {
  grid: () => void;
  list: () => void;
};
const Tools = ({ grid, list }: gridTypes) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-8 text-xl">
      <h1 className="text-3xl font-bold">الدورات</h1>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={grid}
          className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-lg bg-white shadow-[var(--Shadow)] select-none"
        >
          <img src={gridImg} alt="grid" />
        </button>
        <button
          onClick={list}
          className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-lg bg-white shadow-[var(--Shadow)] select-none"
        >
          <img src={listImg} alt="list" />
        </button>
        <div className="flex h-[50px] min-w-[150px] cursor-pointer items-center justify-between rounded-2xl bg-white px-5 py-2 shadow-[var(--Shadow)] select-none sm:min-w-[190px]">
          <h1>المادة</h1>
          <img src={arrow} alt="arrow" className="h-1.5 w-2.5" />
        </div>
      </div>
    </div>
  );
};

export default Tools;
