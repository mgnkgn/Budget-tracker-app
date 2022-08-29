import React, { useContext, useState } from "react";
import { TextField, Button } from "@mui/material";
import { v4 as uuidV4 } from "uuid";
import { MainContext } from "../context/context-main";

const Form = () => {
  const [income, setIncome] = useState({
    incomeName: "",
    incomeAmount: "",
    incomeDate: "",
  });

  const [expense, setExpense] = useState({
    expenseName: "",
    expenseAmount: "",
    expenseDate: "",
  });

  const { pushIncomeTransaction, pushExpenseTransaction } =
    useContext(MainContext);

  const onChangeIncomeHandler = (event) => {
    setIncome({ ...income, [event.target.name]: event.target.value });
  };

  const onChangeExpenseHandler = (event) => {
    setExpense({
      ...expense,
      [event.target.name]: event.target.value,
    });

    console.log(expense);
  };

  const onSubmitIncomeHandler = (event) => {
    event.preventDefault();

    if (
      income.incomeName !== "" &&
      income.incomeAmount !== 0 &&
      income.incomeDate !== ""
    ) {
      const formedIncomeTransaction = {
        id: uuidV4(),
        type: "income",
        name: income.incomeName,
        amount: +income.incomeAmount,
        date: income.incomeDate.split("-").reverse().join("/"),
      };

      pushIncomeTransaction(formedIncomeTransaction);
      income.incomeName = "";
      income.incomeAmount = "";
      income.incomeDate = "";
    }
  };

  const onSubmitExpenseHandler = (event) => {
    event.preventDefault();

    if (
      expense.expenseName !== "" &&
      expense.expenseAmount !== 0 &&
      expense.expenseDate !== ""
    ) {
      const formedExpenseTransaction = {
        id: uuidV4(),
        type: "expense",
        name: expense.expenseName,
        amount: +expense.expenseAmount,
        date: expense.expenseDate.split("-").reverse().join("/"),
      };

      pushExpenseTransaction(formedExpenseTransaction);
      expense.expenseName = "";
      expense.expenseAmount = "";
      expense.expenseDate = "";
    }
  };

  return (
    <>
      <div className="form-container-income">
        <form className="income-form" onSubmit={onSubmitIncomeHandler}>
          <div className="form-first-row">
            <TextField
              className="form-element-class"
              id="standard-basic"
              label="Income Type"
              name="incomeName"
              value={income.incomeName}
              variant="filled"
              autoComplete="off"
              sx={{
                width: { xs: "3.7rem", md: "10rem" },
                input: {
                  xs: {
                    color: "cyan",
                    fontFamily: "Dosis",
                    fontSize: "0.6rem",
                  },
                  md: {
                    color: "cyan",
                    fontFamily: "Dosis",
                    fontSize: "1rem",
                  },
                },
                label: {
                  xs: {
                    color: "cyan",
                    fontFamily: "Dosis",
                    fontSize: "0.6rem",
                  },
                  md: {
                    color: "cyan",
                    fontFamily: "Dosis",
                    fontSize: "1rem",
                  },
                },
              }}
              onChange={onChangeIncomeHandler}
            />
            <TextField
              className="form-element-class"
              id="standard-basic"
              type="number"
              autoComplete="off"
              label="Amount"
              name="incomeAmount"
              value={income.incomeAmount}
              variant="outlined"
              sx={{
                width: { xs: "3.7rem", md: "10rem" },
                input: {
                  xs: {
                    color: "cyan",
                    fontFamily: "Dosis",
                    fontSize: "0.6rem",
                  },
                  md: {
                    color: "cyan",
                    fontFamily: "Dosis",
                    fontSize: "1rem",
                  },
                },
                label: {
                  xs: {
                    color: "cyan",
                    fontFamily: "Dosis",
                    fontSize: "0.6rem",
                  },
                  md: {
                    color: "cyan",
                    fontFamily: "Dosis",
                    fontSize: "1rem",
                  },
                },
              }}
              onChange={onChangeIncomeHandler}
            />
          </div>
          <div className="form-second-row">
            <TextField
              className="form-element-class"
              id="standard-basic"
              type="date"
              name="incomeDate"
              value={income.incomeDate}
              variant="outlined"
              sx={{
                width: { xs: "3.7rem", md: "10rem" },
                input: {
                  xs: {
                    color: "cyan",
                    fontFamily: "Dosis",
                    fontSize: "0.6rem",
                  },
                  md: {
                    color: "cyan",
                    fontFamily: "Dosis",
                    fontSize: "1rem",
                  },
                },
              }}
              onChange={onChangeIncomeHandler}
            />
            <Button
              className="form-element-class"
              variant="outlined"
              type="submit"
              sx={{
                width: { xs: "3.7rem", md: "10rem" },
                height: { xs: "2.75rem", md: "3.5rem" },
                color: "rgb(148, 228, 228)",
                background: "#52A2BF",
                fontFamily: "Dosis",
              }}
            >
              Add Income
            </Button>
          </div>
        </form>
      </div>
      <div className="form-container-expense">
        <form className="expense-form" onSubmit={onSubmitExpenseHandler}>
          <div className="form-first-row">
            <TextField
              className="form-element-class"
              id="standard-basic"
              label="Expense Type"
              name="expenseName"
              value={expense.expenseName}
              autoComplete="off"
              variant="filled"
              color="warning"
              sx={{
                width: { xs: "3.7rem", md: "10rem" },
                input: {
                  xs: {
                    color: "#F20530",
                    fontFamily: "Dosis",
                    fontSize: "0.6rem",
                  },
                  md: {
                    color: "#F20530",
                    fontFamily: "Dosis",
                    fontSize: "1rem",
                  },
                },

                label: {
                  xs: {
                    color: "#F20530",
                    fontFamily: "Dosis",
                    fontSize: "0.6rem",
                  },
                  md: {
                    color: "#F20530",
                    fontFamily: "Dosis",
                    fontSize: "1rem",
                  },
                },
                fontFamily: "Dosis",
              }}
              onChange={onChangeExpenseHandler}
            />
            <TextField
              className="form-element-class"
              id="standard-basic"
              type="number"
              name="expenseAmount"
              value={expense.expenseAmount}
              autoComplete="off"
              label="Amount"
              variant="outlined"
              color="warning"
              sx={{
                width: { xs: "3.7rem", md: "10rem" },
                input: {
                  xs: {
                    color: "#F20530",
                    fontFamily: "Dosis",
                    fontSize: "0.6rem",
                  },
                  md: {
                    color: "#F20530",
                    fontFamily: "Dosis",
                    fontSize: "1rem",
                  },
                },
                label: {
                  xs: {
                    color: "#F20530",
                    fontFamily: "Dosis",
                    fontSize: "0.6rem",
                  },
                  md: {
                    color: "#F20530",
                    fontFamily: "Dosis",
                    fontSize: "1rem",
                  },
                },
                fontFamily: "Dosis",
              }}
              onChange={onChangeExpenseHandler}
            />
          </div>
          <div className="form-second-row">
            <TextField
              className="form-element-class"
              id="standard-basic"
              type="date"
              name="expenseDate"
              value={expense.expenseDate}
              variant="outlined"
              sx={{
                width: { xs: "3.7rem", md: "10rem" },
                input: {
                  xs: {
                    color: "#F20530",
                    fontFamily: "Dosis",
                    fontSize: "0.6rem",
                  },
                  md: {
                    color: "#F20530",
                    fontFamily: "Dosis",
                    fontSize: "1rem",
                  },
                },
              }}
              onChange={onChangeExpenseHandler}
            />
            <Button
              className="form-element-class"
              variant="outlined"
              color="warning"
              type="submit"
              sx={{
                width: { xs: "3.7rem", md: "10rem" },
                height: { xs: "2.75rem", md: "3.5rem" },
                color: "#F20505",
                background: "#8C0707",
                fontFamily: "Dosis",
              }}
            >
              Add Expense
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
