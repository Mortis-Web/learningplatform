import React from 'react';
import happy from '../../assets/images/Vector (2).png';
import page from '../../assets/images/book.png';
import book from '../../assets/images/books.png';

const Statis = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-10">
      <article className="flex items-center justify-center gap-4 text-center">
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#D6A0061A] shadow-md">
          <img
            src={happy}
            alt="happy"
            className="rounded-full outline-[1px] outline-offset-4 outline-[#D6A006]"
          />
        </div>
        <div>
          <h1 className="text-lg font-semibold">المعدل</h1>
          <h1 className="text-lg font-semibold">92.5%</h1>
        </div>
      </article>
      <article className="flex items-center justify-center gap-4 text-center">
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#D153571A] shadow-md">
          <img src={book} alt="happy" className="rounded-full" />
        </div>
        <div>
          <h1 className="text-lg font-semibold">الكورسات</h1>
          <h1 className="text-lg font-semibold">10</h1>
        </div>
      </article>
      <article className="flex items-center justify-center gap-4 text-center">
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#41B4671A] shadow-md">
          <img src={page} alt="happy" className="rounded-full" />
        </div>
        <div>
          <h1 className="text-lg font-semibold">الواجبات</h1>
          <h1 className="text-lg font-semibold">10/12</h1>
        </div>
      </article>
    </div>
  );
};

export default Statis;
