import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="transactionList">
      <div className="transactionList__header">History</div>
      <div className="transactionList__history">
        {transactions.map((transaction) => {
          return <Transaction transaction={transaction} key={transaction.id} />;
        })}
      </div>
    </div>
  );
}

export default TransactionList;
