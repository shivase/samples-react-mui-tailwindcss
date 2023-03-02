import { useState } from 'react';

import Expenses from '../components/Expenses/Expenses';
import type { Expense } from '../components/Expenses/Expenses';
import NewExpense from '../components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: '2020/7/14',
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: '2021/02/12' },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: '2021/02/28',
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: '2021/05/12',
  },
];

export const ExpensesApp = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (data: Expense) => {
    setExpenses((prevExpenses) => [data, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
