import user from "../../assets/images/Avatar.png";
import Select from 'react-select';
import type { ControlProps, StylesConfig } from 'react-select';
import type { CSSObject } from '@emotion/react';

const grades = [
  { value: '1', label: 'الصف الأوّل الابتدائي' },
  { value: '2', label: 'الصف الثاني الابتدائي' },
  { value: '3', label: 'الصف الثالث الابتدائي' },
  { value: '4', label: 'الصف الرابع الابتدائي' },
  { value: '5', label: 'الصف الخامس الابتدائي' },
  { value: '6', label: 'الصف السادس الابتدائي' },
];


const customSelect: StylesConfig<{ value: string; label: string }> = {
  control: (provided: CSSObject, state: ControlProps<{ value: string; label: string }>) => ({
    ...provided,
    border: 'none',
    outline: 'none',
    padding: '10px',
    borderRadius: '16px',
    boxShadow: 'none',
    '&:hover': {
      border: 'none',
    },
    ...(state.isFocused && {
      border: 'none',
      boxShadow: 'none',
      outline: 'none',
    }),
  }),
  menu: (provided: CSSObject) => ({
    ...provided,
    bottom: '100%',
    top: 'auto',
    marginBottom: '5px',
  }),
};

const ProfileDataBox = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-4 sm:gap-14">
      <span className="flex justify-center items-center h-[180px] w-[180px] rounded-full bg-blue-200">
        <img src={user} alt="user" className="w-full h-full object-cover overflow-hidden" />
      </span>

      <article className="grid sm:[grid-template-columns:repeat(2,1fr)] w-full gap-6 sm:gap-10">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-[1rem] font-semibold">الأسم</label>
          <input type="text" id="name" name="name" className="rounded-2xl shadow-[var(--Shadow)] p-4" required />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[1rem] font-semibold">البريد الالكتروني</label>
          <input type="email" id="email" name="email" className="rounded-2xl shadow-[var(--Shadow)] p-4" required />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="grade-select" className="text-[1rem] font-semibold">الصف الدراسي</label>
          <Select
            options={grades}
             inputId="grade-select"
            name="grade-select"
            className="shadow-[var(--Shadow)] rounded-2xl max-h-14"
            styles={customSelect}
            placeholder="اختر الصف الدراسي"
            // Note: required on react-select needs manual validation
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="birthdate" className="text-[1rem] font-semibold">تاريخ الميلاد</label>
          <input type="date" id="birthdate" name="birthdate" className="rounded-2xl shadow-[var(--Shadow)] p-4" required />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-[1rem] font-semibold">رقم الموبايل</label>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" className="rounded-2xl shadow-[var(--Shadow)] p-4" required />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="country" className="text-[1rem] font-semibold">البلد</label>
          <input type="text" id="country" name="country" className="rounded-2xl shadow-[var(--Shadow)] p-4" required />
        </div>
      </article>
    </div>
  );
};

export default ProfileDataBox;
