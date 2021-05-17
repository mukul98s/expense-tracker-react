import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuidv4 } from "uuid";

function AddTransaction() {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    if (type && amount) {
      addTransaction({ type, amount: parseInt(amount), id: uuidv4() });
      setAmount("");
      setType("");
    }
  };

  return (
    <div className="addTransaction">
      <div className="addTransaction__header">
        <h3>Add New Record</h3>
      </div>
      <div className="addTransaction__form">
        <form onSubmit={onSubmit}>
          <div className="addTransaction__type">
            <label htmlFor="type">type</label>
            <input
              type="text"
              id="type"
              placeholder="Type..."
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className="addTransaction__amount">
            <label htmlFor="amount">
              Amount <br /> (positive-income,negative-expense)
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Amount..."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button>Add Transaction</button>
        </form>
      </div>
    </div>
  );
}

export default AddTransaction;
