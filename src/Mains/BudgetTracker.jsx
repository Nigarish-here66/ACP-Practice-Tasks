import React, { useState } from "react";

const BudgetTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!amount || !category) return;

    setTransactions([...transactions, { amount: Number(amount), category }]);
    setAmount("");
    setCategory("");
  };

  const totalBalance = transactions.reduce((acc, tx) => acc + tx.amount, 0);
  const balanceStyle = { color: totalBalance < -1000 ? "red" : "black" };

  return (
    <div>
      <h2 style={balanceStyle}>Balance: ${totalBalance}</h2>
      <form onSubmit={handleAddTransaction}>
        <input
          type="number"
          placeholder="Amount (+ for income, - for expense)"
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

      <h3>Transactions</h3>
      <ul>
        {transactions.map((tx, index) => (
          <li key={index}>
            {tx.category}: ${tx.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetTracker;
