import React, { useState } from "react";
import axios from "axios";
import useAuthHelper from "./useAuthHelper";
import { useNavigate } from "react-router-dom";
function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [message, setMessage] = useState("");
  const { getSessionStorage } = useAuthHelper();
  const navigate = useNavigate();

  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:7070/user/validateSecurityAnswer", {
        email: email,
        securityQuestion: securityQuestion,
        securityAnswer: securityAnswer,
      })
      .then(function (response) {
        console.log(response);
        if (response.data.securityAnswer == { securityAnswer }) {
          navigate("/updatePassword");
        } else {
          setMessage("Answer is Invalid");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleEmailSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="securityQuestion">Security Question:</label>
          <span>{getSessionStorage("que")}</span>
        </div>
        <div>
          <label htmlFor="securityAnswer">Security Answer:</label>
          <input
            type="text"
            id="securityAnswer"
            value={securityAnswer}
            onChange={(event) => setSecurityAnswer(event.target.value)}
          />
        </div>
        {message}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ForgetPassword;
