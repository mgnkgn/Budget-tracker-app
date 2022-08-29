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

const LineChartIncome = () => {
  const { transactions } = useContext(MainContext);
  const data = [];

  ///////////////Incomes as Data//////////////////////////
  const onlyIncomesArray = transactions.filter((item) =>
    item.type === "income" ? item.name : null
  );
  const amountsForIncome = onlyIncomesArray.map((item) => item.amount);
  const datesForIncome = onlyIncomesArray.map((item) => item.date);
  const sortedDates = datesForIncome
    .sort(function (a, b) {
      a = a.split("/").reverse().join("");
      b = b.split("/").reverse().join("");
      return a < b ? 1 : a > b ? -1 : 0;
    })
    .map((item) => item.slice(3, 10));

  for (let i = datesForIncome.length; i >= 0; i--) {
    data.push({
      name: sortedDates[i],
      "Amount Earned": amountsForIncome[i],
    });
  }
  return (
    <>
      <LineChart
        width={350}
        height={250}
        data={data}
        margin={{ top: 5, right: 50, left: 5, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          tick={{ fill: "rgba(255,172,22,1.00)" }}
          tickLine={{ stroke: "rgba(255,172,22,1.00)" }}
        />
        <YAxis
          tick={{ fill: "rgba(255,172,22,1.00)" }}
          tickLine={{ stroke: "rgba(255,172,22,1.00)" }}
        />
        <Tooltip />
        <Legend iconType="star" />
        <Line
          type="monotone"
          dataKey="Amount Earned"
          stroke="rgba(255,172,22,1.00)"
        />
      </LineChart>
    </>
  );
};

export default LineChartIncome;
