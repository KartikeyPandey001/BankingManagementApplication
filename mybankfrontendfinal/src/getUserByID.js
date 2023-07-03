import { useEffect, useState } from "react";
import { getuser } from "./service/api";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/style.css'
import { Link, Route, useNavigate } from "react-router-dom";
import UserLogin from "./userLogin";
import DetailsByID from "./detailsByID";

function GetUserByID(props)
{   const initValue=
    {
    id: ''
    };
    const [user, setUser] = useState(initValue);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const getUserDetails= async (user) => {
        var responce = await  getuser(user);
        if (responce.data !== "") {
          console.log(responce);
          return true;
        } else return false;
      };
    const OnInvalidLogin=()=>{
       // debugger;
        setUser(initValue);
        setMessage("Credentials you entered are incorrect!")
    }

    const handleChange=(args)=>{
            var copyOfUser = {...user};
            copyOfUser[args.target.id] = args.target.value;
            setUser(copyOfUser);
    }

    useEffect(()=>
    {
        var errorMessage = "";
        for (const property in user) 
        {  const valueOfProperty = user[property];
            if(valueOfProperty==="")
            {
                errorMessage =  errorMessage + property+ " can not be blank.";
            }
        }    
        setError(errorMessage);
    },[user]);
  
    return <div className="divsize">
         <div>
   <hr></hr><h1>in the AdminPage</h1><hr></hr>
 <div><Link to="/getUsers">Get ALL Users</Link>{" "}
 <Link to="/getUserByID">Get User By ID</Link>{" "}
      <Link to="/app">Logout</Link>
                 </div>
            </div><hr></hr>
        <center>
                <h2>Get User details by ID</h2>
                <hr></hr>
                    <table border={1}  className="table table-success table-striped">
                        <tbody>
                        <tr>
                                <td>Enter Users ID</td>
                                <td >
                                    <input 
                                    style={{borderRadius:'7px'}}
                                    type={"text"}
                                           id="id"
                                           value={user.id}
                                           onChange={handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td style={{columnSpan: 2}}>
                                     <button onClick={   ()=>
                                        {   getUserDetails(user.id);
                                          DetailsByID(user.id);
                                        }}>
                                           Get User Details
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
}

export default GetUserByID;
    