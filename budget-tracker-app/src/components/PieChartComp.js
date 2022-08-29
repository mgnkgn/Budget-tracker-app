import React, { useState, useRef, useEffect, useContext } from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { MainContext } from "../context/context-main";

const PieChartComp = () => {
  const { transactions } = useContext(MainContext);
  const dataDup = [];

  ///////////////Incomes as Data//////////////////////////
  const onlyIncomesArray = transactions.filter((item) =>
    item.type === "income" ? item.name : null
  );
  const amountsForIncome = onlyIncomesArray.map((item) => item.amount);
  const labelsForIncome = onlyIncomesArray.map((item) => item.name);

  for (let i = 0; i < labelsForIncome.length; i++) {
    dataDup.push({ name: labelsForIncome[i], value: amountsForIncome[i] });
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
    <div className="chart-incomes">
      <PieChart width={300} height={150}>
        <Pie
          legendType="rect"
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={20}
          outerRadius={40}
          paddingAngle={10}
          fill="rgba(255,172,22,1.00)"
          label
        />

        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PieChartComp;
