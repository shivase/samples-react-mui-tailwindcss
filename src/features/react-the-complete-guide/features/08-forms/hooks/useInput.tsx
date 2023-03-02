import { useState } from 'react';

export const useInput = (props: { validateValue: (str: string) => boolean }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = props.validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangedHandler,
    valueBlurHandler,
    reset,
  };
};
