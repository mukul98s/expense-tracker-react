import React from "react";
import Transaction from "./Transaction";

function TransactionList() {
  return (
    <div className="transactionList">
      <div className="transactionList__header">History</div>
      {/* loop through the list */}
      <Transaction />
    </div>
  );
}

export default TransactionList;
