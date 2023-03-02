import clsx from 'clsx';

import { useInput } from '../hooks/useInput';

const BasicForm = () => {
  const {
    enteredValue: firstNameInput,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangedHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput({ validateValue: (value) => value.trim() !== '' });

  const {
    enteredValue: lastNameInput,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangedHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput({ validateValue: (value) => value.trim() !== '' });

  const {
    enteredValue: emailInput,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangedHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput({ validateValue: (value) => value.includes('@') });

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const formSubmissionHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  return (
    <form onSubmit={(e) => formSubmissionHandler(e)}>
      {' '}
      <div className="flex flex-wrap gap-x-4">
        <div className="mb-4">
          <label className={clsx(`block`, `mb-2 font-bold`)} htmlFor="firstName">
            First Name
          </label>
          <input
            className={clsx(
              `block`,
              `w-80 max-w-full rounded-md border-[1px] border-solid border-[#ccc] p-2`,
              `focus:border-[#240370] focus:bg-[#e0d4fd] focus:outline-none`,
              firstNameHasError &&
                'border-[1px] border-solid border-[#b40e0e] bg-[#fddddd] focus:border-[#ff8800] focus:bg-[#fbe8d2]',
            )}
            type="text"
            id="firstName"
            value={firstNameInput}
            onChange={(e) => firstNameChangeHandler(e)}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className="text-[#b40e0e]">Name must not be empty.</p>}
        </div>
        <div className="mb-4">
          <label className={clsx(`block`, `mb-2 font-bold`)} htmlFor="lastName">
            Last Name
          </label>
          <input
            className={clsx(
              `block`,
              `w-80 max-w-full rounded-md border-[1px] border-solid border-[#ccc] p-2`,
              `focus:border-[#240370] focus:bg-[#e0d4fd] focus:outline-none`,
              lastNameHasError &&
                'border-[1px] border-solid border-[#b40e0e] bg-[#fddddd] focus:border-[#ff8800] focus:bg-[#fbe8d2]',
            )}
            type="text"
            id="lastName"
            value={lastNameInput}
            onChange={(e) => lastNameChangeHandler(e)}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p className="text-[#b40e0e]">Name must not be empty.</p>}
        </div>
      </div>
      <div className="mb-4">
        <label className={clsx(`block`, `mb-2 font-bold`)} htmlFor="email">
          E-Mail Address
        </label>
        <input
          className={clsx(
            `block`,
            `w-80 max-w-full rounded-md border-[1px] border-solid border-[#ccc] p-2`,
            `focus:border-[#240370] focus:bg-[#e0d4fd] focus:outline-none`,
            emailHasError &&
              'border-[1px] border-solid border-[#b40e0e] bg-[#fddddd] focus:border-[#ff8800] focus:bg-[#fbe8d2]',
          )}
          type="text"
          id="email"
          value={emailInput}
          onChange={(e) => emailChangeHandler(e)}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="text-[#b40e0e]">invalid email address</p>}
      </div>
      <div className="text-right">
        <button
          disabled={!formIsValid}
          className={clsx(
            `disabled:cursor-not-allowed disabled:bg-[#ccc]`,
            `cursor-pointer rounded-md border-[1px] border-solid border-[#240370] bg-[#240370] py-2 px-6 text-white`,
            `hover:bg-[#33059e] active:border-[#33059e] active:bg-[#33059e]`,
          )}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
