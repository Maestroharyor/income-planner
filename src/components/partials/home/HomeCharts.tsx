import React from "react";
import {
  BarChart,
  Bar,
  // Brush,
  ReferenceLine,
  // XAxis,
  // YAxis,
  // CartesianGrid,
  Tooltip,
  // Legend,
  ResponsiveContainer,
} from "recharts";

const months: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

type MonthData = {
  name: string;
  expenses: number;
  income: number;
};

const data: MonthData[] = months.map((month) => ({
  name: month,
  expenses: -Math.floor(Math.random() * 500),
  income: Math.floor(Math.random() * 1000),
}));

const HomeCharts = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        {/* <XAxis dataKey="name" allowDataOverflow /> */}
        {/* <YAxis /> */}
        <Tooltip />
        {/* <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} /> */}
        <ReferenceLine y={0} stroke="#cdcdcd" />
        {/* <Brush dataKey="name" height={30} stroke="#8884d8" /> */}
        <Bar dataKey="expenses" fill="#22c55e" />
        <Bar dataKey="income" fill="#ef4444" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HomeCharts;
