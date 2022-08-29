import React, { useState, useRef, useEffect, useContext } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import { MainContext } from "../context/context-main";

const PieChartExpenses = () => {
  const { transactions } = useContext(MainContext);

  const dataDup = [];

  ///////////////Expenses as Data//////////////////////////
  const onlyExpensesArray = transactions.filter((item) =>
    item.type === "expense" ? item.name : null
  );
  const amountsForExpense = onlyExpensesArray.map((item) => item.amount);
  const labelsForExpense = onlyExpensesArray.map((item) => item.name);

  for (let i = 0; i < labelsForExpense.length; i++) {
    dataDup.push({ name: labelsForExpense[i], value: amountsForExpense[i] });
  }
  const data = dataDup.reduce(function (accumulator, cur) {
    const name = cur.name,
      found = accumulator.find(function (elem) {
        return elem.name == name;
      });
    if (found) found.value += cur.value;
    else accumulator.push(cur);
    return accumulator;
  }, []);

  return (
    <div className="chart-expenses">
      <PieChart width={300} height={150}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={20}
          outerRadius={40}
          paddingAngle={10}
          fill="rgba(255,153,254,1.00)"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PieChartExpenses;
