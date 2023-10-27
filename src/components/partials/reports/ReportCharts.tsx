import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

type MonthData = {
  name: string;
  expenses: number;
  income: number;
};

const data: MonthData[] = months.map((month) => ({
  name: month,
  expenses: Math.floor(Math.random() * 200),
  income: Math.floor(Math.random() * 500),
}));

const ReportsCharts = () => {
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
        defaultShowTooltip={false}
        maxBarSize={100}
      >
        {/* <YAxis /> */}
        <XAxis dataKey="name" className="text-white" color="white" />

        {/* <Tooltip /> */}

        <Bar dataKey="expenses" fill="#809CD2" />
        <Bar dataKey="income" fill="#fff" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ReportsCharts;
