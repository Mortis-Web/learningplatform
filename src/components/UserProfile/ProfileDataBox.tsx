import Select, { type GroupBase } from 'react-select';
import { useContextGrade } from '../../Hooks/ObjContext';
import React, { useEffect, useState } from 'react';
import noImg from '../../assets/images/No_Image_Available.jpg';
import { useContextInput } from '../../Hooks/InputContext';
import { useContextSelect } from '../../Hooks/SelectContext';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import calender from '../../assets/images/Date.png';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const ProfileDataBox = () => {
  const {
    inputRefs,
    selectRefs,
    isEditable,
    handleChange,
    handleDateChange,
    handleSelectChange,
    formData,
    setFormData,
  } = useContextInput();

  const { toggleEye, showPassword } = useContextInput();
  const { mergedStyles } = useContextSelect();

  const { grades, countries } = useContextGrade();
  const [Img, setImg] = useState<string | null>(null);
  useEffect(() => {
    setImg(formData.profile || null);
  }, []);
  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImg(base64);
        setFormData(prev => ({ ...prev, profile: base64 }));
      };
      reader.readAsDataURL(file);
    }
  };
  // prevent potential memory leaks
  React.useEffect(() => {
    let prevImg = Img;
    return () => {
      if (prevImg) URL.revokeObjectURL(prevImg);
    };
  }, [Img]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 sm:gap-14">
      <div className="relative drop-shadow-xl">
        <button
          hidden={!isEditable}
          type="button"
          className="absolute -bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[var(--ButtonColor)] text-3xl font-semibold text-white"
        >
          <label
            htmlFor="user"
            className="h-full w-full min-w-12 cursor-pointer"
          >
            +
          </label>
        </button>
        <span className="flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-full bg-blue-200 select-none">
          <input
            required
            readOnly={!isEditable}
            type="file"
            accept="image/*"
            ref={el => {
              inputRefs.current['profile'] = el;
            }}
            onChange={handleImgChange}
            name="user"
            id="user"
            className="hidden opacity-0"
          />
          <img
            src={Img || noImg}
            alt="user"
            className="h-full w-full object-contain"
          />
        </span>
      </div>

      <article className="grid w-full gap-6 sm:[grid-template-columns:repeat(2,1fr)] sm:gap-10">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-[1rem] font-semibold">
            الأسم
          </label>
          <input
            readOnly={!isEditable}
            minLength={10}
            maxLength={50}
            placeholder="ادخل الإسم رباعي"
            type="text"
            title="الرجاء إدخال حروف فقط"
            id="name"
            name="name"
            value={formData.name}
            pattern="^[A-Za-z\u0600-\u06FF\s]+$"
            ref={el => {
              inputRefs.current['name'] = el;
            }}
            className="rounded-2xl p-4 shadow-[var(--Shadow)]"
            style={isEditable ? { cursor: 'auto' } : { cursor: 'not-allowed' }}
            onChange={handleChange('name')}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[1rem] font-semibold">
            البريد الالكتروني
          </label>
          <input
            readOnly={!isEditable}
            placeholder="youremail@gmail.com"
            title="أدخل بريداً إلكترونياً صالحاً"
            type="email"
            id="email"
            name="email"
            onChange={handleChange('email')}
            value={formData.email}
            ref={el => {
              inputRefs.current['email'] = el;
            }}
            style={isEditable ? { cursor: 'auto' } : { cursor: 'not-allowed' }}
            className="rounded-2xl p-4 shadow-[var(--Shadow)]"
            required
          />
        </div>

        <div className="flex flex-col gap-2" title="اختر الصف الدراسي">
          <label htmlFor="grade-select" className="text-[1rem] font-semibold">
            الصف الدراسي
          </label>
          <Select<
            { value: string; label: string },
            false,
            GroupBase<{ value: string; label: string }>
          >
            isDisabled={!isEditable}
            required
            options={grades}
            inputId="grade-select"
            name="grade"
            onChange={option => handleSelectChange(option, 'grade')}
            value={grades.find(option => option.value === formData.grade)}
            ref={el => {
              selectRefs.current['grade'] = el;
            }}
            className={`max-h-14 rounded-2xl ${!isEditable ? 'pointer-events-auto cursor-not-allowed' : 'cursor-pointer'} shadow-[var(--Shadow)]`}
            styles={mergedStyles}
            placeholder="اختر الصف الدراسي"
          />
        </div>

        <div
          className="relative flex max-h-[88px] flex-col gap-2"
          title="أدخل تاريخ ميلادك"
        >
          <span className="absolute top-1/2 left-0 translate-x-5 translate-y-1">
            <img src={calender} alt="calender" />
          </span>
          <label htmlFor="birthdate" className="text-[1rem] font-semibold">
            تاريخ الميلاد
          </label>
          <DatePicker
            readOnly={!isEditable}
            selected={formData.birthdate ? new Date(formData.birthdate) : null}
            onChange={date => handleDateChange(date, 'birthdate')}
            placeholderText="سجل تاريخ الميلاد"
            dateFormat="yyyy-MM-dd"
            showMonthDropdown
            showYearDropdown
            minDate={new Date(2009, 0, 1)}
            maxDate={new Date(2017, 11, 31)}
            dropdownMode="select"
            id="birthdate"
            name="birthdate"
            required
            className={`w-full rounded-2xl p-4 shadow-[var(--Shadow)] ${
              isEditable ? 'cursor-auto' : 'cursor-not-allowed'
            }`}
            onKeyDown={e => e.preventDefault()}
          />
        </div>

        <div className="relative flex flex-col gap-2">
          <span className="absolute top-1/2 left-0 z-10 translate-x-5 translate-y-1 border-r pr-4 text-[#888888b7]">
            20+
          </span>
          <label htmlFor="phone" className="text-[1rem] font-semibold">
            رقم الموبايل
          </label>
          <input
            readOnly={!isEditable}
            placeholder=""
            maxLength={10}
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            ref={el => {
              inputRefs.current['phone'] = el;
            }}
            pattern="[0-9]{10}"
            title="أدخل رقم الهاتف بالشكل +20XXXXXXXXXX"
            inputMode="numeric"
            style={isEditable ? { cursor: 'auto' } : { cursor: 'not-allowed' }}
            className="relative rounded-2xl p-4 indent-20 text-black shadow-[var(--Shadow)]"
            onChange={handleChange('phone')}
            required
          />
        </div>

        <div className="flex flex-col gap-2" title="اختر دولتك الأم">
          <label htmlFor="country" className="text-[1rem] font-semibold">
            البلد
          </label>
          <Select<
            { value: string; label: string },
            false,
            GroupBase<{ value: string; label: string }>
          >
            isDisabled={!isEditable}
            required
            options={countries}
            inputId="country"
            name="country"
            value={countries.find(option => option.value === formData.country)}
            ref={el => {
              selectRefs.current['country'] = el;
            }}
            className={`max-h-14 rounded-2xl shadow-[var(--Shadow)] ${isEditable ? `cursor-auto` : `cursor-not-allowed`}`}
            styles={mergedStyles}
            onChange={option => handleSelectChange(option, 'country')}
            placeholder="اختر البلد"
          />
        </div>
        <div className="relative flex flex-col gap-2" hidden={!isEditable}>
          <span
            className="absolute top-1/2 left-0 z-10 h-fit w-fit translate-x-3.5 translate-y-2 cursor-pointer"
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
            readOnly={!isEditable}
            minLength={10}
            placeholder=""
            title="أدخل كلمة المرور"
            onChange={handleChange('password')}
            value={formData.password}
            type={!showPassword ? 'password' : 'text'}
            name="password"
            ref={el => {
              inputRefs.current['password'] = el;
            }}
            id="password"
            style={isEditable ? { cursor: 'auto' } : { cursor: 'not-allowed' }}
            className="relative rounded-2xl p-4 shadow-[var(--Shadow)]"
            required
          />
        </div>
        <div className="relative flex flex-col gap-2" hidden={!isEditable}>
          <span
            className="absolute top-1/2 left-0 z-10 h-fit w-fit translate-x-3.5 translate-y-2 cursor-pointer"
            onClick={toggleEye}
          >
            {showPassword ? (
              <FaRegEye className="text-xl text-gray-400" />
            ) : (
              <FaRegEyeSlash className="text-xl text-gray-400" />
            )}
          </span>
          <label
            htmlFor="confirmPassword"
            className="text-[1rem] font-semibold"
          >
            تأكيد كلمة المرور
          </label>
          <input
            readOnly={!isEditable}
            minLength={10}
            placeholder=""
            title="تأكيد كلمة المرور"
            onChange={handleChange('confirmPassword')}
            value={formData.confirmPassword}
            name="confirmPassword"
            ref={el => {
              inputRefs.current['confirmPassword'] = el;
            }}
            type={!showPassword ? 'password' : 'text'}
            id="confirmPassword"
            style={isEditable ? { cursor: 'auto' } : { cursor: 'not-allowed' }}
            className="relative rounded-2xl p-4 shadow-[var(--Shadow)]"
            required
          />
        </div>
      </article>
    </div>
  );
};

export default ProfileDataBox;
