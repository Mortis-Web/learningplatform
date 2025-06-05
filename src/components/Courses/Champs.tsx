import img from '../../assets/images/I hope your day.png';
import star from '../../assets/images/Star.png';
import crown from '../../assets/images/Vector (11).png';

const Champs = () => {
  return (
    <div className="flex gap-4">
      <article className="flex w-full flex-col items-center justify-center gap-4">
        <div className="h-[60px] w-[60px] overflow-hidden rounded-full bg-pink-200">
          <img src={img} alt="user" />
        </div>
        <span className="rounded-xl bg-[var(--ButtonColor)] px-4 py-2 text-center font-medium text-white sm:text-[12px] md:text-sm">
          700 نقطة
        </span>
        <div className="relative isolate mt-4 w-full max-w-[180px] text-[60px] font-semibold text-white">
          <span className="clip three absolute -top-[48%] left-0 z-[-1] block h-20 w-full -translate-y-5 bg-[#608BE9]"></span>
          <span className="block min-h-[124px] w-full bg-[var(--ButtonColor)] pt-2.5 text-center">
            3
          </span>
        </div>
      </article>
      <article className="relative flex w-full flex-col items-center justify-center gap-4">
        <span className="absolute -top-5 left-1/2 flex items-center justify-center">
          <img src={star} alt="star" />{' '}
          <img src={crown} alt="crown" className="absolute" />
        </span>
        <div className="h-[60px] w-[60px] overflow-hidden rounded-full bg-pink-400">
          <img src={img} alt="user" />
        </div>
        <span className="rounded-xl bg-[var(--ButtonColor)] px-4 py-2 text-center font-medium text-white sm:text-[12px] md:text-sm">
          1000 نقطة
        </span>
        <div className="relative isolate mt-4 w-full max-w-[180px] text-[100px] font-semibold text-white">
          <span className="clip absolute -top-[23.8%] left-0 z-[-1] block h-20 w-full -translate-y-5 bg-[#608BE9]"></span>
          <span className="block min-h-[250px] w-full bg-gradient-to-b from-[var(--ButtonColor)] to-[#B3C5ED] text-center">
            1
          </span>
        </div>
      </article>
      <article className="flex w-full flex-col items-center justify-center gap-4">
        <div className="h-[60px] w-[60px] overflow-hidden rounded-full bg-pink-300">
          <img src={img} alt="user" />
        </div>
        <span className="rounded-xl bg-[var(--ButtonColor)] px-4 py-2 text-center font-medium text-white sm:text-[12px] md:text-sm">
          850 نقطة
        </span>
        <div className="relative isolate mt-4 w-full max-w-[180px] text-[80px] font-semibold text-white">
          <span className="clip two absolute -top-[36.5%] left-0 z-[-1] block h-20 w-full -translate-y-5 bg-[#608BE9]"></span>
          <span className="block min-h-[164px] w-full bg-[var(--ButtonColor)] text-center">
            2
          </span>
        </div>
      </article>
    </div>
  );
};

export default Champs;
