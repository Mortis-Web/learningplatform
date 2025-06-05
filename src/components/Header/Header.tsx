import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import logo from '../../assets/images/logoBC.png';
import MobileNav from './MobileNav';
import { useContextInput } from '../../Hooks/InputContext';

const Header = () => {
  const { isEditable } = useContextInput();
  const disabled = isEditable
    ? 'pointer-events-none select-none grayscale-[100%] sticky'
    : '';
  return (
    <header className={`sticky top-0 left-0 z-50 ${disabled}`}>
      <MobileNav />

      <div className="w-full bg-white py-3.5 leading-9 shadow-sm md:py-5">
        {' '}
        <ul className="relative mx-auto flex max-w-[var(--container)] items-center justify-between gap-6 whitespace-nowrap">
          <li>
            {' '}
            <NavLink to="/courses">
              <span className="block max-w-[175px] min-w-[150px] select-none">
                <img
                  src={logo}
                  alt="logo"
                  className="h-full w-full object-cover"
                />
              </span>
            </NavLink>
          </li>
          <li className="hidden md:block">
            {' '}
            <Nav />
          </li>
          <li>
            <NavLink to="/">
              <button
                type="button"
                className="text-md min-w-[175px] rounded-2xl bg-[var(--ButtonColor)] px-6 py-4 leading-normal font-semibold whitespace-nowrap text-white md:text-lg"
              >
                تسجيل الخروج
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
