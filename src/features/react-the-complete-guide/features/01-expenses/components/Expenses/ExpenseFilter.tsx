/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';

type ExpenseFilterProps = {
  selectedYear: string;
  filter: (year: string) => void;
};

const ExpenseFilter: FC<ExpenseFilterProps> = (props) => {
  const { selectedYear, filter } = props;

  const yearChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    filter(e.target.value);
  };

  return (
    <div className="py-0 px-4 text-white">
      <div className="my-4 mx-0 flex w-full items-center justify-between">
        <label className="mb-2 font-bold">Filter by year</label>
        <select
          value={selectedYear}
          onChange={(e) => yearChangeHandler(e)}
          className="rounded-md py-2 px-12 font-bold text-black">
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
