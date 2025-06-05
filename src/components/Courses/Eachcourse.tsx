import book from '../../assets/images/Vector (10).png';
type EachcourseTypes = {
  courseLength: string;
};

const Eachcourse = ({ courseLength }: EachcourseTypes) => {
  return (
    <article className="space-y-2.5 rounded-2xl bg-white p-4 shadow-[var(--Shadow)]">
      <div className="flex items-center gap-4">
        <div className="flex h-[65px] w-[65px] items-center justify-center rounded-full bg-blue-100">
          <img src={book} alt="book" />
        </div>
        <h1 className="text-lg font-semibold">الجبر</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative h-1.5 w-full rounded-full bg-[#F4F4F4]">
          <span className="absolute top-0 right-0 h-full w-3/4 rounded-[inherit] bg-[var(--ButtonColor)]"></span>
        </div>
        <h1 className="min-w-[50px] text-[11px] font-medium whitespace-nowrap">
          10/15 درس
        </h1>
      </div>
      <p className="text-sm font-medium">
        تعلم المفاهيم الاساسية في الرياضيات للمرحله الابتدائية
      </p>
      <div className="gap-2.5" style={{ display: `${courseLength}` }}>
        <span className="rounded-[2px] bg-[#D6A0061A] px-[4px] py-[2px] text-[10px] font-medium text-[#D6A006]">
          23 درس
        </span>
        <span className="rounded-[2px] bg-[#D153571A] px-[4px] py-[2px] text-[10px] font-medium text-[#D15357]">
          12اسبوع
        </span>
        <span className="rounded-[2px] bg-[#41B4671A] px-[4px] py-[2px] text-[10px] font-medium text-[#41B467]">
          50 طالب
        </span>
      </div>
      <div className="mt-2 flex w-full justify-end">
        {' '}
        <button
          type="button"
          className="block rounded-lg bg-[var(--ButtonColor)] px-2.5 py-1.5 text-sm font-medium text-white"
        >
          عرض الكورس
        </button>
      </div>
    </article>
  );
};

export default Eachcourse;
