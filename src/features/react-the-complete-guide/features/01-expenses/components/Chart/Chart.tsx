import React, { FC } from 'react';

import ChartBar from './ChartBar';

export type dataPoint = {
  label: string;
  value: number;
};

export type ChatProps = {
  dataPoints: dataPoint[];
};

const Chart: FC<ChatProps> = (props) => {
  const { dataPoints } = props;
  const dataPointValues = dataPoints.map((data) => data.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="flex h-40 justify-around rounded-xl bg-[#f8dfff] p-4 text-center">
      {dataPoints.map((data) => (
        <ChartBar key={data.label} value={data.value} maxValue={totalMaximum} label={data.label} />
      ))}
    </div>
  );
};

export default Chart;
