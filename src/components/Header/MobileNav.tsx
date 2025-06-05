import { NavLink } from 'react-router-dom';
import { IoIosArrowUp } from 'react-icons/io';
import { useState } from 'react';
import { useContextGrade } from '../../Hooks/ObjContext';

const MobileNav = () => {
  const { navLinks } = useContextGrade();

  const [hideDropdown, setHideDropdown] = useState(true);
  const toggleDropdown = () => {
    setHideDropdown(prev => !prev);
  };
  const closeDropdown = () => {
    setHideDropdown(true);
  };
  return (
    <nav className="block md:hidden">
      <div
        className={`absolute will-change-[transform] ${hideDropdown ? 'pointer-events-none invisible -translate-y-[95px]' : 'pointer-events-auto visible translate-y-[95px]'} -z-[1] block min-h-[180px] w-full bg-white shadow-[var(--Shadow)] duration-500 ease-[var(--Glide)] select-none`}
        inert={hideDropdown ? true : false}
      >
        <ul className="flex min-h-[180px] w-full flex-col items-center justify-between">
          {navLinks.map(({ path, label, icon }) => (
            <li
              key={path}
              className="group w-full border-b border-gray-300 text-center text-lg hover:bg-[var(--ButtonColor)]"
            >
              <NavLink
                onClick={closeDropdown}
                to={path}
                className={
                  'flex h-full items-center justify-center gap-2 p-4 leading-normal font-semibold text-black duration-300 hover:text-white'
                }
              >
                <span className="text-xl">{icon}</span>
                {label}
              </NavLink>
            </li>
          ))}
          {/*  */}
        </ul>
      </div>
      <button
        type="button"
        onClick={toggleDropdown}
        className={`clip absolute ${hideDropdown ? 'translate-y-[95px]' : 'translate-y-[275px]'} right-0 left-0 -z-10 mx-auto flex min-h-22.5 max-w-30.5 rotate-180 cursor-pointer items-end justify-center bg-[#1847aec9] text-2xl text-white backdrop-blur-lg duration-450 ease-[var(--Glide)] will-change-[transform] md:hidden`}
      >
        {hideDropdown ? (
          <IoIosArrowUp />
        ) : (
          <IoIosArrowUp className="rotate-180" />
        )}
      </button>
    </nav>
  );
};

export default MobileNav;
