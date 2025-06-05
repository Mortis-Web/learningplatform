import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className="box-border flex h-fit items-center justify-between space-x-6 lg:space-x-12 leading-9">
        <li className="text-lg font-semibold text-[#1847AE]">
          {' '}
          <NavLink to="/courses">الرئيسية </NavLink>
        </li>
        <li className="text-lg font-semibold text-black">
          {' '}
          <NavLink to="/unit">وحدة العلوم </NavLink>
        </li>
        <li className="text-lg font-semibold text-black">
          {' '}
          <NavLink to="/profile">الملف الشخصي </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
