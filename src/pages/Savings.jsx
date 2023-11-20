import React, { useState } from "react";
import Account from "../components/Account";

import data from "../data";

//add a div to wrap evering in savings component
// adjust styling savings shoudl be centered
// two buttosn below to add and withdraw moeny

// will subtract from the savings acocunt or add

const Savings = () => {
  const [savings, setSavings] = useState(data[2]);
  const [toggle, setToggle] = useState(false);
  const [amount, setAmount] = useState(0);

  const deposit = () => {
    if (amount > 0) {
      setSavings(prev => ({
        ...prev,
        balance: (Number(prev.balance) + Number(amount)).toString(),
      }));

      setAmount(0);
    }
  };
  const toggleForm = () => {
    setToggle(prev => !prev);
  };

  const submit = e => {
    e.preventDefault();

    if (amount > 0) {
      setSavings(prev => ({
        ...prev,
        balance: (Number(prev.balance) - Number(amount)).toString(),
      }));
      setAmount(0);
    }
  };

  const handleChange = e => {
    setAmount(e.target.value);
  };

  return (
    <div className="savings-container">
      <div className="accounts-div">
        <Account {...savings} isSelected />
      </div>

      <button onClick={toggleForm} className="adjust-funds">
        Adjust Savings
      </button>

      {toggle && (
        <form onSubmit={submit} value="form">
          <label htmlFor="account">Amount</label>
          <input type="number" name="account" placeholder="amount" onChange={handleChange} min="1" value={amount} />
          <div className="btn-container">
            <button value="deposit" type="button" onClick={deposit}>
              Deposit
            </button>
            <button value="withdraw">Withdraw </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Savings;
