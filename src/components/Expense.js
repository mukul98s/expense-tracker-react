import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Expense() {
  const { transactions } = useContext(GlobalContext);

  const positive = transactions
    .map((transaction) => transaction.amount)
    .filter((amount) => amount > 0)
    .reduce((a, b) => a + b, 0);

  const negative = transactions
    .map((transaction) => transaction.amount)
    .filter((amount) => amount < 0)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="expense">
      <div className="expense__income">
        <h2>Income</h2>
        <h2>
          <span className="money">Rs.</span>
          {positive}
        </h2>
      </div>
      <div className="expense__debt">
        <h2>Expense</h2>
        <h2>
          <span className="money">Rs.</span> {negative}
        </h2>
      </div>
    </div>
  );
}

export default Expense;
