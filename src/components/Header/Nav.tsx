import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center px-8 space-x-10 leading-9 h-fit">
        <li className="text-lg text-[#1847AE] font-semibold ">
          {" "}
          <NavLink to="/">الرئيسية </NavLink>
        </li>
        <li className="text-lg text-black font-semibold ">
          {" "}
          <NavLink to="/unit">وحدة العلوم </NavLink>
        </li>
        <li className="text-lg text-black font-semibold ">
          {" "}
          <NavLink to="/profile">الملف الشخصي </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
