import { Link } from "react-router-dom";

function DetailsByID(data){
    async function callApi(data){
        const api_url3= 'http://localhost:7071/user';
        let result= await fetch(`${api_url3}/${data}`); 
         result= await result.json();
         console.warn(result);
    
         document.getElementById('aaa').innerHTML=
         result.map((itr)=>
                `<tr>
                     <td> ${itr.firstName}</td>
                     <td> ${itr.lastName}</td>
                     <td> ${itr.email}</td>
                     <td> ${itr.adhareNumber}</td>
                     <td> ${itr.city}</td>
                 </tr>`)
                 .join("")
    }
    callApi()
    return <div>
         <div>
   <hr></hr><h1>in the AdminPage</h1><hr></hr>
 <div><Link to="/getUsers">Get ALL Users</Link>{" "}
 <Link to="/getUserByID">Get User By ID</Link>{" "}
      <Link to="/app">Logout</Link>
                 </div>
            </div><hr></hr>
     <h1>List of Users</h1>
         <table border="1" className="table table-success table-striped">
             <thead>
                 <tr>
                     <th> First Name:</th>
                     <th> Last Name:</th>
                     <th> Email:</th>
                     <th> Adhar Number:</th>
                     <th> City:</th>
                 </tr>
             </thead>
                         <tbody id="aaa"></tbody>
         </table>
     </div>
     }
    
    export default DetailsByID;
