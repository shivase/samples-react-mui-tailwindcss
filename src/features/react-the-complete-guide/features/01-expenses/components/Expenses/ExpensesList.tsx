import { FC } from 'react';

import ExpenseItem from './ExpenseItem';
import type { Expense } from './Expenses';

export type ExpensesListProps = {
  items: Expense[];
};

const ExpensesList: FC<ExpensesListProps> = (props) => {
  const { items } = props;

  if (items.length === 0) {
    return <h2 className="text-center text-white">No expenses found.</h2>;
  }

  return (
    <ul className="list-none p-0">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
