import { Link, Route, useNavigate } from "react-router-dom";
import UserLogin from "./userLogin";
function App() {
  const navigate = useNavigate();
  return (
    <div className="App" style={{ alignItems: "center" }}>
      <center>
        <h3>welcome to bank portal</h3>

        <table border={1}>
          <tr>
            <td>
              <div style={{ height: 100 }}>
                <img src="user.jpg" alt="user" height={100} width={100} />
                <br></br>
                <br></br>
                <button onClick={() => navigate("/userLogin")}>
                  User Login
                </button>
                <br></br>
              </div>
            </td>
            <td>
              <div style={{ height: 100 }}>
                <img src="admin.png" alt="user" height={100} width={100} />
                <br></br>
                <br></br>
                <button onClick={() => navigate("/adminLogin")}>
                  Admin Login
                </button>
                <br></br>
              </div>
            </td>
          </tr>
        </table>
      </center>
    </div>
  );
}
export default App;

//         <Link to="/UserLogin">User Login</Link> <br></br>
//         <Switch>
//             <Route exact path={"/UserLogin"} component={UserLogin}></Route>
//         </Switch>
