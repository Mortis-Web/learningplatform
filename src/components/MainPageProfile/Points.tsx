import React from 'react';
type PointsTypes = {
  points?: number;
  total: number;
  message: string;
};

const Points = ({ points, total, message }: PointsTypes) => {
  const percentage = points ? (points / total) * 100 : total;

  return (
    <article className="w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-[1rem] font-medium">{message}</h1>
        <h1 className="text-[1rem] font-medium">
          {points ? ` ${points}/${total} نقطة` : `${total}%`}{' '}
        </h1>
      </div>
      <div className="relative mt-4 h-2.5 w-full rounded-full bg-[#F4F4F4]">
        <span
          className="absolute top-0 right-0 h-full rounded-[inherit] bg-[var(--ButtonColor)]"
          style={{ width: `${percentage}%` }}
        ></span>
      </div>
    </article>
  );
};

export default Points;
