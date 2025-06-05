import { useContextInput } from '../../Hooks/InputContext';

const Name = () => {
const {formData} = useContextInput()
const userName = formData.name.split(/\s/)[0] || "User69";
  return (
    <div className="flex items-center gap-5">
      <div className="relative">
        <div className="flex h-[80px] w-[80px] overflow-hidden rounded-full bg-blue-200 shadow-md">
          <img src={formData.profile} alt="user" />
          <span className="absolute bottom-0 left-0 m-auto flex h-6 w-6 items-center justify-center rounded-full bg-[#FFC300] text-sm font-semibold text-white shadow-md text-shadow-2xs">
            3
          </span>
        </div>
      </div>
      <h1 className="text-2xl font-bold">مرحبا <span className='mx-2'>{userName}</span></h1>
    </div>
  );
};

export default Name;
