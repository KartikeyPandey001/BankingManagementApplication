import Header from "./header";
import { Link, Route, Routes } from "react-router-dom";
import App from "./app";
import ProtectedRoute from "./protectedRoutes";
import { useEffect, useState } from "react";
import UserLogin from "./userLogin";
import useAuthHelper from "./useAuthHelper";
import Registration from "./registration";
import AdminPage from "./adminPage";
import Footer from "./footer";
import { useNavigate } from "react-router-dom/dist";
import AdminLogin from "./adminLogin";
import UserPage from "./userPage";
import EditDetails from "./editDetails";
import GetUsers from "./getUsers";
import GetUserByID from "./getUserByID";
//import UpdatePassword from "./updatePassword";
import CreateAccount from "./CreateAccount";
import AccountDetails from "./accountDetails";
import TransactionForm from "./TransactionForm";
import GetBalance from "./getBalance";
import UpdateProfile from "./updateProfile";
import ForgetPassword from "./ForgetPassword";
import UpdatePassword from "./updatePassword";
function Dashboard() {
  var [userName, setuserName] = useState("Guest");
  var history = useNavigate();
  var { setSessionStorage, isLoggedIn, getSessionStorage, clearStorage } =
    useAuthHelper();

  useEffect(() => {
    if (isLoggedIn()) {
      var uname = getSessionStorage("userName");
      setuserName(uname);
    } else {
      setuserName("Guest");
    }
  }, []);

  var signin = (credentials, OnInvalidLoginCallback) => {
    //debugger;
    //if credentials are valid
    // call setuserName...so that header can show user name
    //else

    if (credentials.uname === "shantanu" && credentials.pwd === "sms") {
      setSessionStorage("isloggedIn", "true");
      setSessionStorage("userName", credentials.uname);
      setSessionStorage("token", "1234");
      setuserName(credentials.uname);
      history.push("/AdminPage"); //secure
    } else {
      // debugger;
      OnInvalidLoginCallback();
    }
  };

  const signout = () => {
    clearStorage();
    setuserName("Guest");
    history.push("/AdminPage"); //secure
  };
  return (
    <div>
      <Header userName={userName} signout={signout}></Header>
      <hr></hr>
      <div>
        <Link to="/app">Home</Link> {"   "}
        <Link to="/adminPage">Admin Page</Link>
        {"   "}
        <Link to="/userLogin">UserLogin</Link>
        {"   "}
        <Link to="/registration">Registration</Link>
        <br></br>
      </div>
      <div>
        <Routes>
          <Route path={"/getUsers"} element={<GetUsers />} />
          <Route path={"/"} element={<App />} />
          <Route path={"/app"} element={<App />} />
          <Route path={"/userPage"} element={<UserPage />} />
          <Route path={"/adminLogin"} element={<AdminLogin />} />
          <Route path={"/adminPage"} element={<AdminPage />} />
          <Route path={"/getUserByID"} element={<GetUserByID />} />
          <Route path={"/registration"} element={<Registration />} />
          <Route path={"/userlogin"} element={<UserLogin />} />

          {/* <ProtectedRoute exact path={"/AdminPage"} component={AdminPage}
                        signin={signin}/> */}
          {/* <ProtectedRoute exact path={"/users"} component={Users}
                        signin={signin}/>
                <Route exact path={"*"} component={NotFound}></Route> */}
        </Routes>
        <Routes>
          <Route path={"/updateProfile"} element={<UpdateProfile />} />
          {/* <Route path={"/updatePassword"} element={<UpdatePassword />} /> */}
          <Route path={"/createAccount"} element={<CreateAccount />} />
          <Route path={"/showAccountDetails"} element={<AccountDetails />} />
          <Route path={"/processTransaction"} element={<TransactionForm />} />
          <Route path={"/getBalance"} element={<GetBalance />} />
          <Route path={"/forgetPassword"} element={<ForgetPassword />} />
          <Route path={"/updatePassword"} element={<UpdatePassword />} />
        </Routes>
      </div>
      <hr></hr>
      <Footer></Footer>
    </div>
  );
}

export default Dashboard;
