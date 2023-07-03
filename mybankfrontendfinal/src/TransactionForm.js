import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TransactionForm() {
  const [senderAccountNo, setSenderAccountNo] = useState("");
  const [sentAmount, setSentAmount] = useState("");
  const [receiverAccountNo, setReceiverAccountNo] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();
  const transaction = {
    senderAccountNo: senderAccountNo,
    sentAmount: sentAmount,
    reciverAccountNo: receiverAccountNo,
    desc: desc,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:7070/transaction/addFund", transaction)
      .then(function (response) {
        console.log(response);
        navigate("/userPage");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Sender Account Number:
        <input
          type="text"
          value={senderAccountNo}
          onChange={(event) => setSenderAccountNo(event.target.value)}
        />
      </label>
      <label>
        Sent Amount:
        <input
          type="text"
          value={sentAmount}
          onChange={(event) => setSentAmount(event.target.value)}
        />
      </label>
      <label>
        Receiver Account Number:
        <input
          type="text"
          value={receiverAccountNo}
          onChange={(event) => setReceiverAccountNo(event.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TransactionForm;
