import { useEffect, useState } from "react";
import useAuthHelper from "./useAuthHelper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function UserForm() {
  const { getSessionStorage } = useAuthHelper();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    adhareNumber: "",
    role: "",
    securityQuestion: "",
    securityAnswer: "",
    city: "",
  });
  useEffect(() => {
    // debugger;
    axios
      .get(`http://localhost:7070/user/${getSessionStorage("id")}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send PUT request to the endpoint
    fetch(`http://localhost:7070/user/${getSessionStorage("id")}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        navigate("/userPage");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          disabled
        />
      </label>
      <label>
        Adhare Number:
        <input
          type="text"
          name="adhareNumber"
          value={userData.adhareNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          name="role"
          value={userData.role}
          onChange={handleChange}
          disabled
        />
      </label>
      <label>
        Security Question:
        <input
          type="text"
          name="securityQuestion"
          value={userData.securityQuestion}
          onChange={handleChange}
        />
      </label>
      <label>
        Security Answer:
        <input
          type="text"
          name="securityAnswer"
          value={userData.securityAnswer}
          onChange={handleChange}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={userData.city}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
