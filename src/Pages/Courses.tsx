import Tools from "../components/Courses/Tools";
import Testimonial from "../components/Courses/Testimonial";
import Eachcourse from "../components/Courses/Eachcourse";
import Profile from "../components/MainPageProfile/Profile";
import Swipes from "../components/Courses/Swipes";

const Courses = () => {
  return (
    <>
          <Profile/>

    <section className="my-[var(--SecMt)]  max-w-[var(--container)]   mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 order-last md:order-first		 ">
        <Tools />
    <div className='mt-8 grid [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))] gap-4 '>
        <Eachcourse/>
        <Eachcourse/>
        <Eachcourse/>
        <Eachcourse/>
        <Eachcourse/>
        <Eachcourse/>
        <Eachcourse/>
        <Eachcourse/>
        <Eachcourse/>
    </div>
        

      </div>

      <Testimonial />
    </section>
      <Swipes/>
    </>
  );
};

export default Courses;
