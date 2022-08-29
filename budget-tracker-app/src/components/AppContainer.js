import React, { useState } from "react";
import PieChartComp from "./PieChartComp";
import PieChartExpenses from "./PieChartExpenses";
import LineChartExpense from "./LineChartExpense";
import LineChartIncome from "./LineChartIncome";
import Form from "./Form";
import TransactionList from "./TransactionList";
import Budget from "./Budget";
import { Button } from "@mui/material";
import SwapVerticalCircleRoundedIcon from "@mui/icons-material/SwapVerticalCircleRounded";

const AppContainer = () => {
  const [followChart, setFollowChart] = useState(true);
  const [followLineChart, setFollowLineChart] = useState(true);

  const onClickChartHandler = () => {
    setFollowChart(!followChart);
  };

  const onClickLineChartHandler = () => {
    setFollowLineChart(!followLineChart);
  };

  return (
    <main className="app-container">
      <header className="app-header">
        <h1 className="heading-main">Pocket Tracker App</h1>
      </header>

      <Form />
      <TransactionList></TransactionList>
      <Budget></Budget>

      <div className="chart-container">
        <Button
          variant="outlined"
          type="submit"
          startIcon={<SwapVerticalCircleRoundedIcon />}
          sx={{
            width: "10rem",
            height: "1.2rem",
            color: "rgb(148, 228, 228)",
            background: "#52A2BF",
            fontFamily: "Dosis",
            transform: "translateY(1rem)",
          }}
          onClick={onClickChartHandler}
        >
          {followChart ? "INCOMES" : "EXPENSES"}
        </Button>
        {followChart ? <PieChartComp /> : <PieChartExpenses />}
      </div>
      <div className="linechart-container">
        {followLineChart ? <LineChartExpense /> : <LineChartIncome />}
        <Button
          variant="outlined"
          type="submit"
          startIcon={<SwapVerticalCircleRoundedIcon />}
          sx={{
            width: "10rem",
            height: "1.2rem",
            color: "rgb(148, 228, 228)",
            background: "#52A2BF",
            fontFamily: "Dosis",
          }}
          onClick={onClickLineChartHandler}
        >
          {followLineChart ? "EXPENSES" : "INCOMES"}
        </Button>
      </div>
    </main>
  );
};

export default AppContainer;
