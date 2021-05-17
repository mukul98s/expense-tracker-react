import React from "react";

function Transaction() {
  return (
    <div className="transaction">
      <div className="transaction__type">
        <h3>Bath</h3>
      </div>
      <div className="transaction__amount">
        <h3>
          <span className="money">Rs.</span>789
        </h3>
      </div>
    </div>
  );
}

export default Transaction;
