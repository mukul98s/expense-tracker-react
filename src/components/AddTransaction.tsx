import React, { FormEvent, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction() {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");

  const {
    addTransaction,
  } = useContext(GlobalContext)!;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (type && amount) {
      addTransaction(type, parseInt(amount));
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
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e)}>
          <div className="addTransaction__type">
            <label htmlFor="type">Expense Type</label>
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
