import { FC, useState } from 'react';

import Card from '../UI/Card';

import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

export type Expense = {
  id: string;
  title: string;
  amount: number;
  date: string;
};

export type ExpenseProps = {
  items: Expense[];
};

const Expenses: FC<ExpenseProps> = (props) => {
  const { items } = props;
  const [selectedYear, setYear] = useState<string>('2021');

  const yearChangeHandler = (yearFilter: string) => {
    setYear(yearFilter);
  };

  const filteredExpenses = items.filter(
    (expense) => new Date(expense.date).getFullYear().toString() === selectedYear,
  );

  return (
    <div>
      <Card className="my-8 mx-auto max-w-[95%] bg-[#1f1f1f] p-4">
        <ExpenseFilter selectedYear={selectedYear} filter={yearChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
