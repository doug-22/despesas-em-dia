/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Chart } from "react-google-charts";

type ChartType = {
  width: number;
  height: number;
  type: any;
  title: string;
  data: Array<any>;
};

export function ChartComponent({
  width,
  height,
  type,
  title,
  data,
}: ChartType) {
  const options = {
    title: title,
  };
  return (
    <Chart
      width={`${width}px`}
      height={`${height}px`}
      chartType={type}
      data={data}
      options={options}
    />
  );
}
