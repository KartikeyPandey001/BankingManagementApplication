import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isloged } from "./service/api";
import { UserPage } from "./userPage";
import useAuthHelper from "./useAuthHelper";
import { Link } from "react-router-dom";
function UserLogin() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { setSessionStorage } = useAuthHelper();

  const navigate = useNavigate();
  const isLogedin = async (user) => {
    let responce = await isloged(user);
    if (responce.data !== "") {
      setSessionStorage("id", responce.data.id);
      setSessionStorage("firstName", responce.data.firstName);
      setSessionStorage("que", responce.data.securityQuestion);
      setSessionStorage("ans", responce.data.securityAnswer);
      return true;
    } else return false;
  };
  const OnInvalidLogin = () => {
    //debugger;
    setUser({ email: "", password: "" });
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

  return (
    <>
      <center>
        <h1>User Login ...</h1>
        <hr></hr>
        <table>
          <tbody>
            <tr>
              <td>User Name</td>
              <td>
                <input
                  type={"text"}
                  id="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>Password</td>
              <td>
                <input
                  type={"password"}
                  id="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={() => {
                    if (error === "" && isLogedin(user)) {
                      return navigate("/userPage");
                    } else {
                      OnInvalidLogin();
                    }
                  }}
                >
                  signin
                </button>
                <Link to="/forgetPassword">Forget Password</Link>
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
export default UserLogin;

//     import { useEffect, useState } from "react";
//     import { Route } from "react-router-dom";
//     import App from "./app";
//     import { isloged } from "./service/api";

//     function UserLogin(props)
//     {
//         const [message, setMessage] = useState("");
//         const [user, setUser] = useState({email:  "",password:""});
//         const [error, setError] = useState("");

//         const isLogedin=async(user)=>{
//             let responce=await isloged(user);
//            if(responce.data!=="")
//            { console.log(responce);
//             return true;
//            }
//            else
//            return false;

//         }
//         const OnInvalidLogin=()=>{
//             //debugger;
//             setUser({ email:"",password:""});
//             setMessage("Credentials you entered are incorrect!")
//         }
//         const handleChange=(args)=>{
//                 var copyOfUser = {...user};
//                 copyOfUser[args.target.id] = args.target.value;
//                 setUser(copyOfUser);
//         }

//         useEffect(()=>
//         {
//             var errorMessage = "";
//             for (const property in user)
//             {
//                 const valueOfProperty = user[property];
//                 if(valueOfProperty==="")
//                 {
//                     errorMessage =  errorMessage +
//                             property+ " can not be blank.";
//                 }
//             }
//             setError(errorMessage);

//         },[user]);

//         debugger;
//         return (<><center>
//                     <h1>User Login ...</h1>
//                     <hr></hr>
//                         <table>
//                             <tbody>
//                                 <tr>
//                                     <td>User Name</td>
//                                     <td>
//                                         <input type={"text"}
//                                                id="email"
//                                                value={user.email}
//                                                onChange={handleChange}/>
//                                     </td>
//                                 </tr>

//                                 <tr>
//                                     <td>Password</td>
//                                     <td>
//                                         <input type={"password"}
//                                                id="password"
//                                                value={user.password}
//                                                onChange={handleChange}/>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td >
//                                     <button onClick={() => {
//                                     if (error === "") {
//                              isLogedin(user).then(result => {
//                            if (result) {
//                           props.history.push('/app');
//                         } else {
//                             OnInvalidLogin();
//                                }
//                                });
//     }
// }}>
//     signin
// </button>

//                                          {/* <button onClick={   ()=>
//                                             {
//                                                if(error==="" && isLogedin(user))
//                                                {
//                                                 return <Route path={"/"} element={<App/>}/>;
//                                                  // isLogedin(user);
//                                                }
//                                                else
//                                                {
//                                                 OnInvalidLogin();
//                                                }
//                                             }}>
//                                                 signin
//                                         </button> */}
//                                         </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     <hr></hr>

//                     <h4>{message}</h4>
//                     <h4>{error}</h4>
//                     </center>
//                </>)
//     }
// export default UserLogin;
// return(
// <>
// <center><br></br>
// <h1>login here</h1>
//     <div>
//         <tbody>
//             <tr>
//                 <td>
//                     Username:
//                 </td>
//                 <td>
//                     <input type={Text}
//                            id="uname"
//                       //     value={user.uname}
//                            onChange/><br></br>
//                 </td>
//             </tr>
//             <tr>
//                 <td>
//                     Password:
//                 </td>
//                 <td>
//                     <input type={Text}
//                            id="password"
//                         //    value={user.password}
//                            /><br></br>
//                 </td>
//                 </tr>
//                 <tr >
//                 <td style={{columnSpan:2}}>
//                     <center>
//                         <button onClick={alert}>sign in</button>
//                     </center>
//                 </td>
//                 </tr>

//         </tbody>
//     </div>

// </center>
// </>
// );
