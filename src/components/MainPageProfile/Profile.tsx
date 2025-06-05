import React from 'react';
import Name from './Name';
import Statis from './Statis';
import Points from './Points';

const Profile = () => {
  return (
    <section className="mx-auto mt-[var(--SecMt)] max-w-[var(--container)] rounded-2xl bg-white shadow-[var(--Shadow)]">
      <div className="w-full px-8 py-8 sm:py-14">
        <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-10">
          <Name />
          <Statis />
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-10 sm:mt-20 md:flex-nowrap md:gap-[7.5%]">
          <Points points={300} total={350} message={'تقدم المستوى'} />
          <Points total={40} message={' تقدم الامتحانات'} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
