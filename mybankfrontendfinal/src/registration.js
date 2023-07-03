import { useEffect, useState } from "react";
import { addUser } from "./service/api";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/style.css";
import { Route } from "react-router-dom";
import UserLogin from "./userLogin";

function Registration(props) {
  const initValue = {
    firstName: "",
    lastName: "",
    adhareNumber: "",
    email: "",
    password: "",
    profilePassword: "",
    role: "CUSTOMER",
    securityQuestion: "what is your pet name",
    securityAnswer: "",
    city: "",
  };
  const [user, setUser] = useState(initValue);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const OnInvalidLogin = () => {
    // debugger;
    setUser(initValue);
    setMessage("Credentials you entered are incorrect!");
  };

  const addUserDetails = async () => {
    await addUser(user);
  };

  const handleChange = (args) => {
    var copyOfUser = { ...user };
    copyOfUser[args.target.id] = args.target.value;
    setUser(copyOfUser);
  };

  useEffect(() => {
    var errorMessage = "";
    for (const property in user) {
      const valueOfProperty = user[property];
      if (valueOfProperty === "") {
        errorMessage = errorMessage + property + " can not be blank.";
      }
    }
    setError(errorMessage);
  }, [user]);

  // debugger;
  return (
    <div className="divsize">
      <center>
        <h1>Register Here!</h1>
        <hr></hr>

        <table
          border={1}
          width="650px"
          className="table table-success table-striped"
        >
          <tbody>
            <tr>
              <td>First Name</td>
              <td>
                <input
                  style={{ borderRadius: "7px" }}
                  type={"text"}
                  id="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>
                <input
                  type={"text"}
                  style={{ borderRadius: "7px" }}
                  id="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type={"text"}
                  style={{ borderRadius: "7px" }}
                  id="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Adhar Number</td>
              <td>
                <input
                  type={"text"}
                  style={{ borderRadius: "7px" }}
                  id="adhareNumber"
                  value={user.adhareNumber}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input
                  type={"password"}
                  style={{ borderRadius: "7px" }}
                  id="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Profile Password</td>
              <td>
                <input
                  type={"Password"}
                  style={{ borderRadius: "7px" }}
                  id="profilePassword"
                  value={user.profilePassword}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Role</td>
              <td>
                <input
                  type={"text"}
                  style={{ borderRadius: "7px" }}
                  id="role"
                  value={user.role}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Security Question</td>
              <td>
                <input
                  type={"text"}
                  style={{ borderRadius: "7px" }}
                  id="securityQuestion"
                  value={user.securityQuestion}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Security Answer</td>
              <td>
                <input
                  type={"text"}
                  style={{ borderRadius: "7px" }}
                  id="securityAnswer"
                  value={user.securityAnswer}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>City</td>
              <td>
                <input
                  type={"text"}
                  style={{ borderRadius: "7px" }}
                  id="city"
                  value={user.city}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td style={{ columnSpan: 2 }}>
                <button
                  onClick={() => {
                    if (error === "") {
                      //props.signin(user,OnInvalidLogin)
                      OnInvalidLogin();
                      addUserDetails(user);
                    }
                    return (
                      <Route path={"/userlogin"} element={<UserLogin />} />
                    );
                  }}
                >
                  Login
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <hr></hr>

        <h4>{message}</h4>
        <h4>{error}</h4>
      </center>
    </div>
  );
}

export default Registration;
