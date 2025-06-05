import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type ReactNode,
} from 'react';
import UseToastError from './UseToastError';
import type Select from 'react-select/base';
import type { GroupBase } from 'react-select';
import type { SelectInstance } from 'react-select';

type FormDataTypes = {
  name: string;
  phone: string;
  email: string;
  grade: string;
  country: string;
  birthdate: string;
  password: string;
  confirmPassword: string;
  profile: string;
};

type DataBoxTypes = {
  formData: FormDataTypes;
  setFormData: React.Dispatch<React.SetStateAction<FormDataTypes>>;
  error: string;
  setError: (msg: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (
    field: keyof FormDataTypes
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
  inputRefs: React.MutableRefObject<{ [key: string]: HTMLInputElement | null }>;
  selectRefs: React.MutableRefObject<{
    [key: string]: Select<
      { value: string; label: string },
      false,
      GroupBase<{ value: string; label: string }>
    > | null;
  }>;
  handleDateChange: (date: Date | null, field: keyof FormDataTypes) => void;
  handleSelectChange: (
    selectedOption: { value: string; label: string } | null,
    field: keyof FormDataTypes
  ) => void;
  isEditable: boolean;
  setEditable: (state: boolean) => void;
  validateInputs: () => boolean;
  showPassword: boolean;
  toggleEye: () => void;
  handleReset: () => void;
};

const MyContextInput = createContext<DataBoxTypes | null>(null);
const FORM_STORAGE_KEY = 'userprofiledataform';

export const InputProvider = ({ children }: { children: ReactNode }) => {
  const getSavedInformation = (): FormDataTypes => {
    const saved = localStorage.getItem(FORM_STORAGE_KEY);
    return saved
      ? JSON.parse(saved)
      : {
          name: '',
          phone: '',
          country: '',
          email: '',
          birthdate: '',
          grade: '',
          password: '',
          confirmPassword: '',
          profile: '',
        };
  };

  const [formData, setFormData] = useState<FormDataTypes>(() =>
    getSavedInformation()
  );
  const [isEditable, setEditable] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const toggleEye = () => {
    setShowPassword(prev => !prev);
  };
  const [error, setError] = useState<string>('');

  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
  const selectRefs = useRef<{
    [key: string]: SelectInstance<
      { value: string; label: string },
      false,
      GroupBase<{ value: string; label: string }>
    > | null;
  }>({});
  const selectDomRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const requiredFields = [
    'name',
    'email',
    'password',
    'confirmPassword',
    'phone',
    'grade',
    'country',
    'profile',
  ];

  const raiseError = (msg: string) => {
    setError(msg);
    UseToastError(msg);
  };

  const FocusScroll = (input: HTMLInputElement | null) => {
    if (input) {
      input.scrollIntoView({ block: 'center', behavior: 'smooth' });
      input.focus();
    }
  };

  useEffect(() => {
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const validateInputs = (): boolean => {
    for (const field of requiredFields) {
      const el = inputRefs.current[field];
      const selectEl = selectRefs.current[field];

      const value = formData[field as keyof FormDataTypes];
      if (!value) {
        raiseError(` الرجاء ملء جميع الحقول ${field}`);
        if (el) {
          FocusScroll(el);
        }
        if (selectEl) {
          const selectDomEl = selectDomRefs.current[field];
          if (selectDomEl) {
            selectDomEl.scrollIntoView({ block: 'center', behavior: 'smooth' });
          }
          selectEl.focus();
        }

        return false;
      }
    }
    if (formData.password.length < 10) {
      raiseError('كلمة المرور يجب أن تكون 10 أحرف على الأقل');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      FocusScroll(inputRefs.current['confirmPassword']);
      raiseError('كلمتا المرور غير متطابقتين');
      return false;
    }

    if (!formData.birthdate) {
      raiseError('الرجاء ادخال تاريخ الميلاد');
      return false;
    }

    if (!/^1\d{9}$/.test(formData.phone)) {
      raiseError('رقم الهاتف غير صحيح');
      return false;
    }

    const nameInput = inputRefs.current['name'];
    const name = formData.name.trim();
    if (nameInput) {
      const wordCount = name.split(/\s+/).length;
      if (wordCount !== 4) {
        nameInput.setCustomValidity('الرجاء إدخال الاسم رباعي (4 كلمات)');
        nameInput.reportValidity();
        FocusScroll(inputRefs.current['name']);
        raiseError('الرجاء إدخال الاسم رباعي (4 كلمات)');
        return false;
      } else {
        nameInput.setCustomValidity('');
      }
    }

    const emailInput = formData.email;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput)) {
      raiseError('البريد الإلكتروني غير صحيح');
      FocusScroll(inputRefs.current['email']);
      return false;
    }

    return true;
  };

  const handleChange =
    (field: keyof FormDataTypes) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isEditable) return;

      if (field === 'name') {
        const onlyLetters = e.target.value.replace(
          /[^A-Za-z\u0600-\u06FF\s]/g,
          ''
        );
        e.target.value = onlyLetters;
        setFormData(prev => ({ ...prev, [field]: onlyLetters }));
      } else if (field === 'phone') {
        const onlyDigits = e.target.value.replace(/\D/g, '');
        e.target.value = onlyDigits;
        setFormData(prev => ({ ...prev, [field]: onlyDigits }));
      } else {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
      }
    };

  const handleDateChange = (date: Date | null, field: keyof FormDataTypes) => {
    if (!isEditable) return;
    if (field === 'birthdate') {
      const saveDate = date ? date.toISOString().split('T')[0] : '';
      setFormData(prev => ({ ...prev, [field]: saveDate }));
    }
  };

  const handleSelectChange = (
    selectedOption: { value: string; label: string } | null,
    field: keyof FormDataTypes
  ) => {
    if (!isEditable) return;
    setFormData(prev => ({
      ...prev,
      [field]: selectedOption ? selectedOption.value : '',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateInputs()) return;
    setEditable(false);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      country: '',
      email: '',
      birthdate: '',
      grade: '',
      password: '',
      confirmPassword: '',
      profile: '',
    });
    setEditable(true);
    localStorage.removeItem(FORM_STORAGE_KEY);
  };

  return (
    <MyContextInput.Provider
      value={{
        error,
        setError,
        handleSubmit,
        inputRefs,
        selectRefs,
        handleDateChange,
        handleSelectChange,
        isEditable,
        setEditable,
        validateInputs,
        formData,
        setFormData,
        handleChange,
        showPassword,
        toggleEye,
        handleReset,
      }}
    >
      {children}
    </MyContextInput.Provider>
  );
};

export const useContextInput = () => {
  const context = useContext(MyContextInput);
  if (!context)
    throw new Error('useContextInput must be used within InputProvider');
  return context;
};
