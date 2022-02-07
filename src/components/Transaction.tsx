import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

interface transaction {
  amount: number;
  type: string;
  id: number;
}

interface Props {
  transaction: transaction;
}

const Transaction: React.FC<Props> = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
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