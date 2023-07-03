import { useEffect, useState } from "react";

function AdminLogin(props) {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({ uname: "", pwd: "" });
  const [error, setError] = useState("");

  const OnInvalidLogin = () => {
    //debugger;
    setUser({ uname: "", pwd: "" });
    setMessage("Credentials you entered are incorrect!");
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
    <>
      <center>
        <h1>Admin Login </h1>
        <hr></hr>
        <table>
          <tbody>
            <tr>
              <td>User Name</td>
              <td>
                <input
                  type={"text"}
                  id="uname"
                  value={user.uname}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>Password</td>
              <td>
                <input
                  type={"password"}
                  id="pwd"
                  value={user.pwd}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={() => {
                    if (error == "") {
                      props.signin(user, OnInvalidLogin);
                    }
                  }}
                >
                  signin
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    if (error == "") {
                      props.signin(user, OnInvalidLogin);
                    }
                  }}
                >
                  signout
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <hr></hr>

        <h4>{message}</h4>
        <h4>{error}</h4>
      </center>
    </>
  );
}
export default AdminLogin;
