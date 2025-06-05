import { NavLink } from 'react-router-dom';
import { FaRegEye , FaRegEyeSlash, } from "react-icons/fa6";
import { useContextInput } from '../../Hooks/InputContext';


const Login = () => {
  const {toggleEye,showPassword} = useContextInput();
  return (
    <form action="/courses" className="grid gap-10">
      <div>
        <h1 className="text-3xl font-semibold text-[var(--ButtonColor)]">
          مرحبًا بعودتك!
        </h1>
        <h6 className="mt-2 text-lg font-medium text-pretty text-[#7A7A7A]">
          سجّل دخولك لمواصلة التعلم مع دروسنا التفاعلية!
        </h6>
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
        <span className="absolute top-1/2 left-0 z-0 h-fit w-fit translate-x-3.5 cursor-pointer translate-y-2" onClick={toggleEye}>
          {showPassword ? <FaRegEye className='text-gray-400 text-xl'/> : <FaRegEyeSlash className='text-gray-400 text-xl'/>}
                  </span>
        <label htmlFor="password" className="text-[1rem] font-semibold">
          كلمة المرور
        </label>
        <input
          placeholder=""
          type={!showPassword ? 'password' : "text"}
          id="password"
          className="rounded-2xl px-4 py-2 shadow-[var(--Shadow)]"
          required
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
          إنشاء حساب جديد{' '}
          <NavLink to="/signin">
            <span className="mr-1 text-[var(--ButtonColor)]">
              ليس لديك حساب؟
            </span>
          </NavLink>{' '}
        </h6>
      </div>
    </form>
  );
};

export default Login;
