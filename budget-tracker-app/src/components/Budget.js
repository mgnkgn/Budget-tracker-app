import React, { useContext } from "react";
import { MainContext } from "../context/context-main";
import { CardContent, Typography } from "@mui/material";

const Budget = () => {
  const { transactions } = useContext(MainContext);

  const incomes = transactions.map((item) =>
    item.type === "income" ? item.amount : null
  );

  const totalIncome = incomes
    .reduce((accu, cur) => (accu += cur), 0)
    .toFixed(2);

  const expenses = transactions.map((item) =>
    item.type === "expense" ? item.amount : null
  );

  const totalExpense = expenses
    .reduce((accu, cur) => (accu += cur), 0)
    .toFixed(2);

  return (
    <div className="card-budget">
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            color: "#04BF8A",
            padding: "2.5px",
            boxShadow: " 4px -6px rgba(0, 0, 0, 0.3)",
            borderRadius: ".5rem",
            borderTop: "1px solid #04BF8A",
            borderRight: "1px solid #04BF8A",
          }}
          color="text.primary"
          gutterBottom
        >
          Total Income :{" "}
          <span className="span-total-income">+{totalIncome} $</span>
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            color: "#FF4858",
            padding: "2.5px",
            boxShadow: " 4px -6px rgba(0, 0, 0, 0.3)",
            borderRadius: ".5rem",
            borderTop: "1px solid #FF4858",
            borderRight: "1px solid #FF4858",
          }}
          color="text.primary"
          gutterBottom
        >
          Total Expense :{" "}
          <span className="span-total-expense">-{totalExpense} $</span>
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            color: "cyan",
            padding: "8px 5px",
            boxShadow: " 5px -8px rgba(0, 0, 0, 0.3)",
            borderRadius: ".5rem",
            borderTop: "1px solid cyan",
            borderRight: "1px solid cyan",
          }}
          color="text.primary"
          gutterBottom
        >
          Balance :{" "}
          <span className="span-total-budget">
            {(totalIncome - totalExpense).toFixed(2)} $
          </span>
        </Typography>
      </CardContent>
    </div>
  );
};

export default Budget;
