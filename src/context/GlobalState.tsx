import React, { useReducer } from "react";
import AppReducer from "../reducer/AppReducer";

export interface Transaction {
  amount: number;
  type: string;
  id: number;
}

interface ExpenseContext {
  transactions: Transaction[];
  deleteTransaction?: Function;
  addTransaction?: Function;
}

const initialState: ExpenseContext = {
  transactions: [],
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTransaction = (transaction: Transaction) => {
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
