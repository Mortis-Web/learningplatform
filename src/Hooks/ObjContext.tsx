// context/MyContext.tsx
import { createContext, useContext } from 'react';
import type { ReactElement, ReactNode } from 'react';
import { FaHome , FaRegUser , } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";

export type Option = {
  value: string;
  label: string;
};

type NavLinks = {
  path:string,
  label:string,
  icon: ReactElement,
}

const navLinks: NavLinks[] =  [
  { path: '/courses', label: 'الرئيسية', icon: <FaHome /> },
  { path: '/unit', label: 'وحدة العلوم', icon: <MdVideoLibrary /> },
  { path: '/profile', label: 'الملف الشخصي', icon: <FaRegUser /> },
];

const grades: Option[] = [
  { value: '1', label: 'الصف الأوّل الابتدائي' },
  { value: '2', label: 'الصف الثاني الابتدائي' },
  { value: '3', label: 'الصف الثالث الابتدائي' },
  { value: '4', label: 'الصف الرابع الابتدائي' },
  { value: '5', label: 'الصف الخامس الابتدائي' },
  { value: '6', label: 'الصف السادس الابتدائي' },
];

const countries: Option[] = [
  { value: 'eg', label: 'مصر' },
  { value: 'uk', label: 'المملكة المتحدة' },
  { value: 'us', label: 'الولايات المتحدة' },
  { value: 'sa', label: 'السعودية' },
];

type ObjContextType = {
  grades: Option[];
  countries: Option[];
  navLinks: NavLinks[];
};

const MyContextGrade = createContext<ObjContextType | null>(null);

export const ObjProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MyContextGrade.Provider value={{ grades, countries , navLinks}}>
      {children}
    </MyContextGrade.Provider>
  );
};

export const useContextGrade = () => {
  const context = useContext(MyContextGrade);
  if (!context)
    throw new Error('useContextGrade must be used within a <ObjProvider>');
  return context;
};
