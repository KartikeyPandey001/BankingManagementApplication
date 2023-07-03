import React, { useState } from "react";
import axios from "axios";
import useAuthHelper from "./useAuthHelper";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const [userId, setUserId] = useState(1);
  const [balance, setBalance] = useState(0);
  const [accountType, setAccountType] = useState("CURRENT");
  const { getSessionStorage } = useAuthHelper();
  const navigate = useNavigate();

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleBalanceChange = (event) => {
    setBalance(event.target.value);
  };

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };
  const newAccount = {
    userId: getSessionStorage("id"),
    balance: Number(balance),
    type: accountType,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:7070/user/createAcc", newAccount, {})
      .then(function (response) {
        console.log(response);
        navigate("/showAccountDetails");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Balance:
          <input type="number" value={balance} onChange={handleBalanceChange} />
        </label>
        <br />
        <label>
          Account Type:
          <select value={accountType} onChange={handleAccountTypeChange}>
            <option value="CURRENT">Current</option>
            <option value="SAVINGS">Savings</option>
          </select>
        </label>
        <br />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;
