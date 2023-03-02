import React, { FC } from 'react';

type ChartBarProps = {
  value: number;
  maxValue: number;
  label: string;
};

const ChartBar: FC<ChartBarProps> = (props) => {
  const { value, maxValue, label } = props;
  let barFillHeight = '0%';

  if (value > 0) {
    barFillHeight = `${Math.round((value / maxValue) * 100)}%`;
  }

  console.log(barFillHeight);

  return (
    <div className="flex h-full flex-col items-center">
      <div className="flex h-full w-full flex-col justify-end overflow-hidden rounded-xl border-[#313131] bg-[#c3b4f3]">
        <div
          className="w-full bg-[#4826b9] transition-all duration-300 ease-out"
          style={{ height: `${barFillHeight}` }}
        />
      </div>
      <div className="text-center text-xs font-bold">{label}</div>
    </div>
  );
};

export default ChartBar;
