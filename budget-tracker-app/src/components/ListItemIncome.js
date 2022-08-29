import React, { useContext } from "react";
import { CardContent, Typography, SvgIcon } from "@mui/material";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import MoneyOffCsredRoundedIcon from "@mui/icons-material/MoneyOffCsredRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { MainContext } from "../context/context-main";

const ListItemIncome = () => {
  const { transactions, deleteTransaction } = useContext(MainContext);
  // Income and Expense at same component with conditional rendering
  return (
    <>
      {transactions.map((transaction) =>
        transaction.type === "income" ? (
          <CardContent
            key={transaction.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              background: "rgba(221,255,221,0.3)",
              boxShadow: "1px 1px 4px rgba(0,0,0,0.3)",
              borderBottom: "1.8px solid  rgba(0,220,220,0.75)",
              height: { xs: "0.35rem", md: "1rem" },
            }}
          >
            <Typography component="div">
              <SvgIcon
                fontSize="medium"
                component={AttachMoneyRoundedIcon}
                sx={{ color: "rgba(0,114,0,0.5)" }}
                inheritViewBox
              />
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                color: "#fff",
                fontWeight: { xs: "300", md: "600" },
                flex: { xs: "2.25", md: "2.5" },
                marginLeft: { xs: "0.1px", md: "5rem" },
              }}
            >
              + <span className="span-list">{transaction.amount}</span>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.75rem", md: "1rem" },
                // textTransform: "uppercase",
                fontWeight: { xs: "300", md: "500" },
                color: "#fff",
                transform: { xs: "translateY(.2rem)", md: "translateY(.4rem)" },
                flex: "2.2",
              }}
              variant="h1"
              color="text.secondary"
              gutterBottom
            >
              {transaction.name}
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ color: "#fff", fontSize: { xs: "0.65rem", md: "1rem" } }}
            >
              {transaction.date}
            </Typography>
            <Typography component="div">
              <button
                className="btn-delete"
                onClick={() => deleteTransaction(transaction.id)}
              >
                <SvgIcon
                  fontSize="medium"
                  component={DeleteRoundedIcon}
                  sx={{ color: "rgba(228,147,0,0.4)" }}
                  inheritViewBox
                />
              </button>
            </Typography>
          </CardContent>
        ) : (
          <CardContent
            key={transaction.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              background: "rgba(255,120,120,0.4)",
              boxShadow: "1px 1px 4px rgba(0,0,0,0.3)",
              borderBottom: "1.8px solid rgba(0,220,220,0.75)",
              height: { xs: "0.35rem", md: "1rem" },
            }}
          >
            <Typography component="div" sx={{ justifySelf: "start" }}>
              <SvgIcon
                fontSize="medium"
                component={MoneyOffCsredRoundedIcon}
                sx={{ color: "rgba(130,0,0,0.5)" }}
                inheritViewBox
              />
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                color: "rgba(114,0,0,1.00)",
                fontWeight: { xs: "300", md: "600" },
                flex: { xs: "2.25", md: "2.5" },
                marginLeft: { xs: "0.1px", md: "5rem" },
              }}
            >
              - <span className="span-list">{transaction.amount}</span>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.75rem", md: "1rem" },
                // textTransform: "uppercase",
                fontWeight: { xs: "300", md: "500" },
                color: "rgba(114,0,0,1.00)",
                transform: { xs: "translateY(.2rem)", md: "translateY(.4rem)" },
                flex: "2.2",
              }}
              variant="h1"
              color="text.secondary"
              gutterBottom
            >
              {transaction.name}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                color: "rgba(114,0,0,1.00)",
                fontSize: { xs: "0.65rem", md: "1rem" },
              }}
            >
              {transaction.date}
            </Typography>
            <Typography component="div">
              <button
                className="btn-delete"
                onClick={() => deleteTransaction(transaction.id)}
              >
                <SvgIcon
                  fontSize="medium"
                  component={DeleteRoundedIcon}
                  sx={{ color: "rgba(228,147,0,0.4)" }}
                  inheritViewBox
                />
              </button>
            </Typography>
          </CardContent>
        )
      )}{" "}
    </>
  );
};

export default ListItemIncome;
