/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState } from 'react';

import type { Expense } from '../Expenses/Expenses';

const Label = (props: { name: string }) => {
  const { name } = props;

  return <label className="mb-2 block font-bold">{name}</label>;
};

type InputProps = {
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  min?: string;
  step?: string;
};

const Input: FC<InputProps> = (props) => {
  const { type, value, min, step, onChange } = props;

  if (min && step) {
    return (
      <input
        className="w-80 max-w-[100%] rounded-md border-solid border-[#ccc] p-2"
        value={value}
        type={type}
        min={min}
        step={step}
        onChange={onChange}
      />
    );
  }

  return (
    <input
      type={type}
      value={value}
      className="w-80 max-w-[100%] rounded-md border-solid border-[#ccc] p-2"
      onChange={onChange}
    />
  );
};

type ExpenseFormProps = {
  onSaveExpenseData: (data: Expense) => void;
  onEditingClose: () => void;
};

const ExpenseForm: FC<ExpenseFormProps> = (props) => {
  const { onEditingClose, onSaveExpenseData } = props;
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredTitle: e.target.value,
    }));
  };
  const amountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredAmount: e.target.value,
    }));
  };
  const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredDate: e.target.value,
    }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const expenseData = {
      id: Math.random().toString(),
      title: userInput.enteredTitle,
      amount: Number(userInput.enteredAmount),
      date: userInput.enteredDate,
    };

    onSaveExpenseData(expenseData);
    onEditingClose();

    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    });
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <div className="mb-4 flex flex-wrap gap-4 text-left">
        <div>
          <Label name="Title" />
          <Input
            value={userInput.enteredTitle}
            type="text"
            onChange={(e) => titleChangeHandler(e)}
          />
        </div>
        <div>
          <Label name="Amount" />
          <Input
            value={userInput.enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={(e) => amountChangeHandler(e)}
          />
        </div>
        <div>
          <Label name="Date" />
          <Input
            value={userInput.enteredDate}
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={(e) => dateChangeHandler(e)}
          />
        </div>
      </div>
      <div className="text-right">
        <button
          type="button"
          onClick={onEditingClose}
          className="mx-2 w-32 rounded-lg border-2 bg-[#40005d] p-2 text-white">
          Cancel
        </button>
        <button type="submit" className="mx-2 w-32 rounded-lg border-2 bg-[#40005d] p-2 text-white">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
