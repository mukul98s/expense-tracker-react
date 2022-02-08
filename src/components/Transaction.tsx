import React from "react";
import { useGlobalState, Transaction as ITransaction } from "../context/GlobalState";

interface Props {
  transaction: ITransaction;
}

const Transaction: React.FC<Props> = ({ transaction }) => {
  const { deleteTransaction } = useGlobalState();
  return (
    <div className={`transaction ${transaction.amount > 0 ? "plus" : "minus"}`}>
      <div className="transaction__type">
        <h4>{transaction.type}</h4>
      </div>
      <div className="transaction__amount">
        <h4>
          <span className="money">Rs.</span>
          {Math.abs(transaction.amount)}
        </h4>
      </div>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction && deleteTransaction(transaction.id)}
      >
        x
      </button>
    </div>
  );
};

export default Transaction;
