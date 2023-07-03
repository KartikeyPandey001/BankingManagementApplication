import React, { useState } from "react";
import TransactionForm from "./TransactionForm";

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleSubmit = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div>
      <h1>Transaction Form</h1>
      <TransactionForm onSubmit={handleSubmit} />
      <h1>Transactions</h1>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            Sender Account Number: {transaction.senderAccountNo}
            <br />
            Sent Amount: {transaction.sentAmount}
            <br />
            Receiver Account Number: {transaction.receiverAccountNo}
            <br />
            Description: {transaction.desc}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
