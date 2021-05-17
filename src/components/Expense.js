import React from "react";

function Expense() {
  return (
    <div className="expense">
      <div className="expense__income">
        <h2>Income</h2>
        <h2>
          <span className="money">Rs.</span>323
        </h2>
      </div>
      <div className="expense__debt">
        <h2>Expense</h2>
        <h2>
          <span className="money">Rs.</span> 579
        </h2>
      </div>
    </div>
  );
}

export default Expense;
