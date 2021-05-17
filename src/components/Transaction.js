import React from "react";

const Transaction = ({ transaction }) => {
  return (
    <div className="transaction">
      <div className="transaction__type">
        <h3>{transaction.type}</h3>
      </div>
      <div className="transaction__amount">
        <h3>
          <span className="money">Rs.</span>
          {transaction.amount}
        </h3>
      </div>
    </div>
  );
};

export default Transaction;
