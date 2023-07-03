import { Link, Route, Routes } from "react-router-dom";
import App from "./app";
import EditDetails from "./editDetails";
import UpdatePassword from "./updatePassword";
import CreateAccount from "./CreateAccount";
//import App from "./app";
function SendMoney() {
  return (
    <>
      <h1>send money page</h1>
    </>
  );
}
function UserPage() {
  return (
    <>
      <h6>this is users page</h6>
      <div>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/updateProfile">Update Profile</Link>
        <br></br>
        <Link to="/getBalance">Get Balance</Link>
        <br></br>
        <Link to="/createAccount">Create Account</Link>
        <br></br>
        <Link to="/processTransaction">process transaction</Link>
        <br></br>
        <Link to="/app">Logout</Link>
        <br></br>
      </div>
      <div>
        {/* <Routes>
          <Route path={"/editDetails"} element={<EditDetails />} />
          <Route path={"/updatePassword"} element={<UpdatePassword />} />
          <Route path={"/createAccount"} element={<CreateAccount />} />
        </Routes> */}
      </div>
    </>
  );
}
export default UserPage;
