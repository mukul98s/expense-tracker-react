import React, { useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import AppReducer, { TransactionsState } from "../reducer/AppReducer";

export interface Transaction {
  amount: number;
  type: string;
  id: string;
}

interface ExpenseContext {
  transactions: Transaction[];
  deleteTransaction: (id: Transaction['id']) => void;
  addTransaction: (type: string, amount: number) => void;
}

const initialState: TransactionsState = {
  transactions: [],
};

const GlobalContext = React.createContext<ExpenseContext|null>(null);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTransaction = (type: string, amount: number) => {
    dispatch({ type: "ADD_TRANSACTION", payload: { type, amount, id: uuidv4()} });
  };

  const deleteTransaction = (id: Transaction['id']) => {
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

export const useGlobalState = () => {
  const context = useContext(GlobalContext);

  if (!context) throw new Error("useGlobalState must be used within GlobalProvider");

  return context;  
}