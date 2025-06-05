import React from 'react';
import arrow from '../../assets/images/Vector (8).png';

type SwiperTypes = {
  pages: number;
};
const Swipes = ({ pages }: SwiperTypes) => {
  const fakeArray = Array(pages).fill(null);
  return (
    <article className="mx-auto my-[calc(var(--SecMt)*1.5)] flex max-h-fit max-w-[var(--container)] flex-wrap items-center justify-center gap-8">
      <span className="flex items-center gap-2 text-black">
        <button className="flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-transparent bg-[#E9ECEF] text-sm font-medium shadow-[var(--Shadow)] hover:border-[#1847AE] hover:text-[#1847AE]">
          &lt;
        </button>

        <button className="flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-transparent bg-white text-sm font-medium shadow-[var(--Shadow)] hover:border-[#1847AE] hover:text-[#1847AE]">
          1
        </button>
        <button className="flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-transparent bg-white text-sm font-medium shadow-[var(--Shadow)] hover:border-[#1847AE] hover:text-[#1847AE]">
          2
        </button>
        <button className="flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-transparent bg-white text-sm font-medium shadow-[var(--Shadow)] hover:border-[#1847AE] hover:text-[#1847AE]">
          3
        </button>
        <button className="flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-transparent bg-white text-sm font-medium shadow-[var(--Shadow)] hover:border-[#1847AE] hover:text-[#1847AE]">
          4
        </button>
        <button className="flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-transparent bg-[#E9ECEF] text-sm font-medium shadow-[var(--Shadow)] hover:border-[#1847AE] hover:text-[#1847AE]">
          &gt;
        </button>
      </span>
      <span className="flex items-center gap-2 text-sm font-normal">
        <label>الصفحة/</label>
        <select
          name="pages"
          id="search"
          className="min-w-[140px] appearance-none rounded-lg bg-white px-3 py-2 shadow-[var(--Shadow)] [direction:ltr]"
        >
          {fakeArray.map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
        <span className="absolute top-0 right-0 block h-5 w-5 bg-red-400">
          <img src={arrow} alt="dropdown" />
        </span>
      </span>
    </article>
  );
};

export default Swipes;
