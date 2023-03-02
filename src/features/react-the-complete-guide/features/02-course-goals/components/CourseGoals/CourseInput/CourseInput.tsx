/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState } from 'react';

import Button from '../../UI/Button';

type CourseInputProps = {
  onAddGoal: (val: string) => void;
};

const CourseInput: FC<CourseInputProps> = (props) => {
  const { onAddGoal } = props;
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(e.target.value);
  };

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);

      return;
    }
    setIsValid(true);
    onAddGoal(enteredValue);
  };

  return (
    <form
      onSubmit={(e) => {
        formSubmitHandler(e);
      }}>
      <div className="my-2 mx-0 focus:border-[#8b005d] focus:bg-[#fad0ec] focus:outline-none">
        <label className={`mb-2 block font-bold ${!isValid ? 'text-red-500' : ''}`}>
          Course Goal
        </label>
        <input
          className={`${
            !isValid ? 'border-red-500 bg-[#ffd7d7]' : ''
          } block w-full border-[1px] border-solid border-[#ccc] py-0 px-1 text-base focus:border-[#8b005d] focus:bg-[#fad0ec] focus:outline-none`}
          type="text"
          onChange={(e) => {
            goalInputChangeHandler(e);
          }}
        />
      </div>
      <Button buttonType="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
