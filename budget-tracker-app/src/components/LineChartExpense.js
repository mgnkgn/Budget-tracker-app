import React, { useContext } from "react";
import {
  LineChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  Line,
} from "recharts";
import { MainContext } from "../context/context-main";

const LineChartExpense = () => {
  const { transactions } = useContext(MainContext);

  const data = [];

  const onlyExpensesArray = transactions.filter((item) =>
    item.type === "expense" ? item.name : null
  );
  const amountsForExpense = onlyExpensesArray.map((item) => item.amount);
  const datesForExpense = onlyExpensesArray.map((item) => item.date);
  const sortedDates = datesForExpense
    .sort(function (a, b) {
      a = a.split("/").reverse().join("");
      b = b.split("/").reverse().join("");
      return a < b ? 1 : a > b ? -1 : 0;
    })
    .map((item) => item.slice(3, 10));

  for (let i = datesForExpense.length + 1; i >= 0; i--) {
    data.push({
      name: sortedDates[i],
      "Amount Spent": amountsForExpense[i],
    });
  }
  return (
    <div>
      <LineChart
        width={350}
        height={250}
        data={data}
        margin={{ top: 5, right: 50, left: 5, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          tick={{ fill: "rgba(255,153,254,1.00)" }}
          tickLine={{ stroke: "rgba(255,153,254,1.00)" }}
        />
        <YAxis
          tick={{ fill: "rgba(255,153,254,1.00)" }}
          tickLine={{ stroke: "rgba(255,153,254,1.00)" }}
        />
        <Tooltip />
        <Legend iconType="wye" />
        <Line
          type="monotone"
          dataKey="Amount Spent"
          stroke="rgba(255,153,254,1.00)"
        />
      </LineChart>
    </div>
  );
};

export default LineChartExpense;
