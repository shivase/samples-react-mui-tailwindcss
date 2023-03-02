import { FC } from 'react';

import type { dataPoint } from '../Chart/Chart';
import Chart from '../Chart/Chart';

import type { Expense } from './Expenses';

type ExpenseChartProps = {
  expenses: Expense[];
};

const ExpensesChart: FC<ExpenseChartProps> = (props) => {
  const { expenses } = props;

  const chartDataPoints: dataPoint[] = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  expenses.forEach((expense) => {
    const expenseMonth = new Date(expense.date).getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  });

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
