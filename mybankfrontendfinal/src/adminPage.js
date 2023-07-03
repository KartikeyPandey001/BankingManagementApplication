import { Link, Route, Routes, Switch } from 'react-router-dom';
import App from './app';
import GetUsers from './getUsers';

function AdminPage()
{
    return ( 
        <div>
        <hr></hr><h1>in the AdminPage</h1><hr></hr>
      <div><Link to="/getUsers">Get ALL Users</Link>{" "}{" "}
           <Link to="/getUserByID">Get User By ID</Link>{" "}
           <Link to="/getUserByID">Delete User By ID</Link>{" "}
           <Link to="/getUserByID">Update User Details</Link>{" "}
           <Link to="/app">Logout</Link>
                      </div>
                 </div>
         )
}

export default AdminPage;