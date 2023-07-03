import React from "react";
import useAuthHelper from "./useAuthHelper";
import { useState, useEffect } from "react";
import axios from "axios";

const AccountDetails = ({ id, accountNumber, balance, type }) => {
  const { getSessionStorage } = useAuthHelper();
  const [data, setData] = useState([]);
  useEffect(() => {
    // debugger;
    axios
      .get(
        `http://localhost:7070/user/getAccountByUserId/${getSessionStorage(
          "id"
        )}`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.accountNumber}</h2>
          <p>{item.balance}</p>
          <p>{item.type}</p>
        </div>
      ))}
    </div>
  );
};

export default AccountDetails;
