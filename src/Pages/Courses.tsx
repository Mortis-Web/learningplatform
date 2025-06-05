import Tools from '../components/Courses/Tools';
import Testimonial from '../components/Courses/Testimonial';
import Eachcourse from '../components/Courses/Eachcourse';
import Profile from '../components/MainPageProfile/Profile';
import Swipes from '../components/Courses/Swipes';
import { useState } from 'react';

const Courses = () => {
  const [courseMode, setCourseMode] = useState<'grid' | 'list'>('grid');
  const isList = courseMode === 'list';
  const gridTemplate = isList
    ? 'repeat(2, minmax(250px, 1fr))'
    : 'repeat(auto-fill, minmax(250px, 1fr))';
  const courseLength = isList ? 'none' : 'flex';
  const fakeArray = Array(9).fill(null);

  return (
    <>
      <Profile />

      <section className="mx-auto my-[var(--SecMt)] grid max-w-[var(--container)] grid-cols-1 gap-x-0 gap-y-10 sm:grid-cols-4 sm:gap-8 lg:grid-cols-3">
        <div className="order-last sm:order-first sm:col-span-2">
          <Tools
            grid={() => setCourseMode('grid')}
            list={() => setCourseMode('list')}
          />
          <div
            className={`mt-8 grid ${isList ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'} gap-4`}
          >
            {fakeArray.map((_, index) => (
              <Eachcourse key={index} courseLength={courseLength} />
            ))}
          </div>
        </div>

        <Testimonial />
      </section>
      <Swipes pages={10} />
    </>
  );
};

export default Courses;
