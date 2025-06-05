import { createContext, useContext, type ReactNode } from 'react';
import type { ControlProps, StylesConfig } from 'react-select';
import type { CSSObject } from '@emotion/react';
import { useContextInput } from './InputContext';

const customSelect: StylesConfig<{ value: string; label: string }> = {
  control: (
    provided: CSSObject,
    state: ControlProps<{ value: string; label: string }>
  ) => ({
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
    }),
  }),
  menu: (provided: CSSObject) => ({
    ...provided,
    bottom: '100%',
    top: 'auto',
    marginBottom: '5px',
  }),
};

type SelectContextTypes = {
  mergedStyles: StylesConfig<{ value: string; label: string }>;
};

const MySelectContext = createContext<SelectContextTypes | null>(null);

export const SelectProvider = ({ children }: { children: ReactNode }) => {
  const { isEditable } = useContextInput();

  const mergedStyles: StylesConfig<{ value: string; label: string }> = {
    ...customSelect,
control: (provided, state) => {
  const baseStyles =
    typeof customSelect.control === 'function'
      ? customSelect.control(provided, state)
      : provided;


  return {
    ...baseStyles,
    cursor: isEditable ? 'auto' : 'not-allowed',
    pointerEvents: 'auto',
    background: "#FFFFFF",
    // color:"#000000"
  };
}
  };

  return (
    <MySelectContext.Provider value={{ mergedStyles }}>
      {children}
    </MySelectContext.Provider>
  );
};

export const useContextSelect = () => {
  const context = useContext(MySelectContext);
  if (!context)
    throw new Error('useContextSelect must be used within MyProvider');
  return context;
};
