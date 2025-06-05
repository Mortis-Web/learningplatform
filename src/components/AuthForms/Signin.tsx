import { NavLink } from 'react-router-dom';
import { useContextGrade } from '../../Hooks/ObjContext';
import { useContextSelect } from '../../Hooks/SelectContext';
import Select from 'react-select';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { useContextInput } from '../../Hooks/InputContext';
const Signin = () => {
  const { toggleEye, showPassword } = useContextInput();
  const { grades } = useContextGrade();
  const { mergedStyles } = useContextSelect();
  return (
    <form action="/courses" className="grid gap-5">
      <div>
        <h1 className="text-3xl font-semibold text-[var(--ButtonColor)]">
          ابدأ رحلتك معنا
        </h1>
        <h6 className="mt-2 text-lg font-medium text-pretty text-[#7A7A7A]">
          أنشئ حسابًا لبدء الدروس التعليمية الممتعة للأطفال.
        </h6>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-[1rem] font-semibold">
          {' '}
          الاسم
        </label>
        <input
          placeholder=""
          type="text"
          id="name"
          className="rounded-2xl px-4 py-2 shadow-[var(--Shadow)]"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[1rem] font-semibold">
          البريد الالكتروني
        </label>
        <input
          placeholder=""
          type="email"
          id="email"
          className="rounded-2xl px-4 py-2 shadow-[var(--Shadow)]"
          required
        />
      </div>

      <div className="relative flex flex-col gap-2">
        <span
          className="absolute top-1/2 left-0 z-0 h-fit w-fit translate-x-3.5 translate-y-2 cursor-pointer"
          onClick={toggleEye}
        >
          {showPassword ? (
            <FaRegEye className="text-xl text-gray-400" />
          ) : (
            <FaRegEyeSlash className="text-xl text-gray-400" />
          )}
        </span>
        <label htmlFor="password" className="text-[1rem] font-semibold">
          كلمة المرور
        </label>
        <input
          placeholder=""
          type={!showPassword ? 'password' : 'text'}
          id="password"
          className="rounded-2xl px-4 py-2 shadow-[var(--Shadow)]"
          required
        />
      </div>
      <div className="relative flex flex-col gap-2">
        <span
          className="absolute top-1/2 left-0 z-0 h-fit w-fit translate-x-3.5 translate-y-2 cursor-pointer"
          onClick={toggleEye}
        >
          {showPassword ? (
            <FaRegEye className="text-xl text-gray-400" />
          ) : (
            <FaRegEyeSlash className="text-xl text-gray-400" />
          )}
        </span>
        <label htmlFor="password" className="text-[1rem] font-semibold">
          تأكيد كلمة المرور
        </label>
        <input
          placeholder=""
          type={!showPassword ? 'password' : 'text'}
          id="confirmPassword"
          className="rounded-2xl px-4 py-2 shadow-[var(--Shadow)]"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-[1rem] font-semibold">
          {' '}
          الصف الدراسي
        </label>
        <Select
          required
          options={grades}
          inputId="grade-select"
          name="grade-select"
          // ref={(el) => (inputRefs.current["grade-select"] = el)}
          className="max-h-14 rounded-2xl shadow-[var(--Shadow)]"
          styles={mergedStyles}
          placeholder="اختر الصف الدراسي"
        />
      </div>
      <div>
        <button
          type="submit"
          className="mx-auto block min-w-full rounded-2xl bg-[var(--ButtonColor)] py-4 text-[1rem] font-semibold text-white"
        >
          تسجيل الدخول
        </button>
        <h6 className="mt-2 text-center text-sm font-medium text-[#7A7A7A]">
          هل سبق لك التسجيل؟
          <NavLink to="/">
            {' '}
            <span className="mr-1 text-[var(--ButtonColor)]">تسجيل الدخول</span>
          </NavLink>
        </h6>
      </div>
    </form>
  );
};

export default Signin;
