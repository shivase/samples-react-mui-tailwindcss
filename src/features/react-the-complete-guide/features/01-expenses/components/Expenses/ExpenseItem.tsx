// import Card from './Card';
import { FC, useState } from 'react';

import Card from '../UI/Card';

import ExpenseDate from './ExpenseDate';

type Props = {
  title: string;
  amount: number;
  date: string;
};

const ExpenseItem: FC<Props> = (props) => {
  const { title, amount, date } = props;
  const [stateTitle] = useState<string>(title);

  return (
    <li>
      <Card className="my-4 mx-0 flex items-center justify-between bg-[#4b4b4b] p-2">
        <ExpenseDate date={date} />
        <div className="flex flex-1 flex-row items-center justify-start gap-4">
          <h2 className="my-0 mx-4 flex-1 text-base text-white">{stateTitle}</h2>
          <div className="rounded-xl border border-solid border-white bg-[#40005d] p-2 text-base font-bold text-white">
            ${amount}
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
