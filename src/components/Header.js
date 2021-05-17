import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Header() {
  const { transactions } = useContext(GlobalContext);

  const money = transactions
    .map((transaction) => transaction.amount)
    .reduce((a, b) => a + b, 0);
  return (
    <div className="header">
      <div className="header__title">
        <h2>Expense Tracker</h2>
      </div>
      <div className="header__balance">
        <h3>Your Balance</h3>
        <h2>
          <span className="money">Rs.</span>
          {money}
        </h2>
      </div>
    </div>
  );
}

export default Header;
