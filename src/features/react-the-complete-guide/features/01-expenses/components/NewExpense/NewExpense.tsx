import { FC, useState } from 'react';

import type { Expense } from '../Expenses/Expenses';

import ExpenseForm from './ExpenseForm';

type NewExpenseProps = {
  addExpenseHandler: (data: Expense) => void;
};

const NewExpense: FC<NewExpenseProps> = (props) => {
  const { addExpenseHandler } = props;

  const [isEditing, setEditing] = useState(false);

  const saveExpenseDataHandler = (data: Expense) => {
    const expenseData = {
      ...data,
    };
    addExpenseHandler(expenseData);
  };

  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  return (
    <div className="m-8 w-[50] max-w-[95%] rounded-xl bg-[#a892ee] p-4 text-center shadow-[0_1px_8px_rgba(0,0,0,0.25)]">
      {isEditing ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onEditingClose={toggleEditing} />
      ) : (
        <button
          type="button"
          className=" rounded-lg border-2 bg-[#40005d] p-2 text-white"
          onClick={toggleEditing}>
          Add new Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
