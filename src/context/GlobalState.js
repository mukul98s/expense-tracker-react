import React, { useReducer } from "react";
import AppReducer from "../reducer/AppReducer";

const initialState = {
  transactions: [
    { id: 2, type: "Salary", amount: 300 },
    { id: 1, type: "Flower", amount: -20 },
    { id: 3, type: "Book", amount: -10 },
    { id: 4, type: "Camera", amount: 150 },
  ],
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
