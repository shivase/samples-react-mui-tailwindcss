import { FC } from 'react';

type Props = {
  date: string;
};

const ExpenseDate: FC<Props> = (props) => {
  const { date } = props;
  const dateTmp = new Date(date);
  const month = dateTmp.toLocaleString('en-US', { month: 'long' });
  const day = dateTmp.toLocaleString('en-US', { day: '2-digit' });
  const year = dateTmp.getFullYear();

  return (
    <div className="flex h-20 w-20 flex-col items-center justify-center rounded-xl border-solid border-[#ececec] bg-[#2a2a2a] text-white">
      <div className="text-xs font-bold">{month}</div>
      <div className="text-xs font-bold">{year}</div>
      <div className="text-2xl font-bold">{day}</div>
    </div>
  );
};

export default ExpenseDate;
