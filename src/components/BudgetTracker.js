import React, { useState } from "react";

const BudgetTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const threshold = -100; // Set spending threshold

  const addTransaction = (e) => {
    e.preventDefault();
    if (!amount || !category) return;
    setTransactions([...transactions, { amount: parseFloat(amount), category }]);
    setAmount("");
    setCategory("");
  };

  const balance = transactions.reduce((acc, t) => acc + t.amount, 0);
  const balanceStyle = balance < threshold ? { color: "red" } : { color: "black" };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Budget Tracker</h2>
      <h3 style={balanceStyle}>Balance: ${balance.toFixed(2)}</h3>
      <form onSubmit={addTransaction}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Add Transaction</button>
      </form>
      <ul>
        {transactions.map((t, index) => (
          <li key={index}>
            {t.category}: ${t.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetTracker;