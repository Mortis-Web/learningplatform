// ./UseToastError.ts
import { toast } from 'react-toastify';

const UseToastError = (error: string) => {
  if (error) {
    toast.error(error, {
      position: 'top-right',
      className: 'rounded-lg select-none shadow-md bg-red-600 text-white',
    });
  }
};

export default UseToastError;
