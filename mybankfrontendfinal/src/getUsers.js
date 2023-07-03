import { Link } from "react-router-dom";

function GetUsers(){
    async function callApi(){
        let result= await fetch('http://localhost:7071/user/getallUser'); 
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
    
    export default GetUsers;
    
    // function Api(){
    //         async function callApi(){
    //             let result= await fetch('https://jsonplaceholder.typicode.com/users');// await is to on console hide the promise 
    //            let result2= await result.json();
    //             console.warn(result2);
    
    //             document.getElementById('aaa').innerHTML=
    //             result2.map((itr)=>
    //                    `<tr>
    //                         <td> ${itr.a}</td>
    //                         <td> ${itr.b}</td>
    //                         <td> ${itr.c.d}</td>
    //                         <td> ${itr.c.e}</td>
    //                     </tr>`).join("")  //  .join("")---->  this is to convert data into string
    //         }
    //         callApi();
      
    //         return(
    //     <>
    //         <h1>API call in javascript</h1>
    //             <table border="1">
    //                 <thead>
    //                     <tr>
    //                         <th> a:</th>
    //                         <th> b:</th>
    //                         <th> d:</th>
    //                         <th> e:</th>
    //                     </tr>
    //                 </thead>
    //                             <tbody id="aaa"></tbody>
    //             </table>
    //     </>)
    //     }
    //     export default Api;