import clsx from 'clsx';

import { useInput } from '../hooks/useInput';

const SimpleInput = () => {
  const {
    enteredValue: nameInput,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangedHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput({ validateValue: (value) => value.trim() !== '' });

  const {
    enteredValue: emailInput,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangedHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput({ validateValue: (value) => value.includes('@') });

  const formIsValid = nameIsValid && emailIsValid;

  const formSubmissionHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Name: ' + nameInput + ' | Email: ' + emailInput);
    nameReset();
    emailReset();
  };

  return (
    <form onSubmit={(e) => formSubmissionHandler(e)}>
      <div className="mb-4">
        <label className="mb-2 block font-bold" htmlFor="name">
          Your Name
        </label>
        <input
          className={clsx(
            `block w-80 max-w-full rounded-md border-[1px] border-solid border-[#ccc] p-2`,
            `focus:border-[#240370] focus:bg-[#e0d4fd] focus:outline-none`,
            nameHasError &&
              'border-[1px] border-solid border-[#b40e0e] bg-[#fddddd] focus:border-[#ff8800] focus:bg-[#fbe8d2]',
          )}
          type="text"
          id="name"
          value={nameInput}
          onChange={(e) => nameChangeHandler(e)}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p className="text-[#b40e0e]">Name must not be empty.</p>}
        <label className="mb-2 block font-bold" htmlFor="name">
          Email Address
        </label>
        <input
          className={clsx(
            `block w-80 max-w-full rounded-md border-[1px] border-solid border-[#ccc] p-2`,
            `focus:border-[#240370] focus:bg-[#e0d4fd] focus:outline-none`,
            emailHasError &&
              'border-[1px] border-solid border-[#b40e0e] bg-[#fddddd] focus:border-[#ff8800] focus:bg-[#fbe8d2]',
          )}
          type="email"
          id="email"
          value={emailInput}
          onChange={(e) => emailChangeHandler(e)}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="text-[#b40e0e]">Email must not be empty and valid value.</p>
        )}
      </div>
      <div className="text-right">
        <button
          disabled={!formIsValid}
          className={clsx(
            `disabled:cursor-not-allowed disabled:bg-[#ccc]`,
            `cursor-pointer rounded-md border-[1px] border-solid border-[#240370] bg-[#240370] py-2 px-6 text-white`,
            `ml-4 hover:bg-[#33059e] active:border-[#33059e] active:bg-[#33059e]`,
          )}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
