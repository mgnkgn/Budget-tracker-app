import React, { createContext, useReducer, useEffect } from "react";
import MainReducer from "./MainReducer";

const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
};

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
export const MainContext = createContext(initialState);

export const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducer, initialState);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  });

  const pushIncomeTransaction = (incomeTransaction) => {
    dispatch({
      type: "PUSH_INCOME",
      payload: incomeTransaction,
    });
  };

  const pushExpenseTransaction = (expenseTransaction) => {
    dispatch({
      type: "PUSH_EXPENSE",
      payload: expenseTransaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <MainContext.Provider
      value={{
        transactions: state.transactions,
        pushIncomeTransaction,
        pushExpenseTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
