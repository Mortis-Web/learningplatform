import Champs from './Champs';
import Lowerchamps from './Lowerchamps';

const Testimonial = () => {
  const fakeArray = Array(4).fill(null);
  return (
    <div className="col-span-2 max-h-fit rounded-4xl bg-white shadow-[var(--Shadow)] lg:col-span-1">
      <h1 className="pt-10 pb-18 text-center text-3xl font-bold">
        لوحة المتصدرين
      </h1>
      <Champs />
      <div className="relative z-1 mt-[-90px] grid min-h-[400px] w-full gap-4 rounded-4xl bg-[#E1EBFF] p-4">
        {fakeArray.map((_, index) => (
          <Lowerchamps key={index} index={index} points={500} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
