import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

interface ITransaction {
  amount: number;
  type: string;
  id: number;
}

const TransactionList: React.FC = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="transactionList">
      <h3>History</h3>
      <div className="transactionList__history">
        {transactions.map((transaction: ITransaction) => {
          return <Transaction transaction={transaction} key={transaction.id} />;
        })}
      </div>
    </div>
  );
};

export default TransactionList;
