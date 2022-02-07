import React, { useReducer } from "react";
import AppReducer from "../reducer/AppReducer";

interface transaction {
  amount: number;
  type: string;
  id: number;
}

interface state {
  transactions: object[];
  deleteTransaction?: Function;
  addTransaction?: Function;
}

const initialState: state = {
  transactions: [],
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTransaction = (transaction: transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const deleteTransaction = (id: number) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const provider = {
    transactions: state.transactions,
    addTransaction,
    deleteTransaction,
  };

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
};
