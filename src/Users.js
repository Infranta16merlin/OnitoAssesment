import { useEffect, useState } from "react";
import './Users.css'

const Users = () =>{
    
    const [users,setUsers] = useState({});

    const fetchData = async () =>{
        const data = await fetch('https://create-new-form-default-rtdb.firebaseio.com/data.json');
        const response = await data.json();
        console.log(response);
      

      const loadedUsers = [];

      for (const key in response) {
        loadedUsers.push({
          id: key,
          users: response[key],
       

          
        });

      }
      setUsers(loadedUsers);
    }

    const data = [];
    
      for (const key in users){
         data.push({
            id:key,
            name: users[key].users[0].name,
            age: users[key].users[0].age,
            mobileNumber: users[key].users[0].mobileNumber,
            address:users[key].users[0].values.address,
            sex: users[key].users[0].sex,
            nationality:users[key].users[0].values.country,
            guardian:users[key].users[0].values.contact,
            govtId: users[key].users[0].number

         })
      }


    console.log(data);

   

       useEffect(()=>{
        fetchData();
       },[])
       return (
        <>
        <h1>User Details</h1>
        <table className="table">
        <tr>
          <th>Name</th>
          <th>Age/Sex</th>
          <th>Mobile Number</th>
          <th>Address</th>
          <th>Nationality</th>
          <th>Guardian Details</th>
          <th>Governement ID</th>
        </tr>
        {data.map((user) =>{
              const {id,name,mobileNumber,address,age,sex,nationality,guardian,govtId} = user;
              return (
                <tr key={id}>
                    <td>{name}</td>
                    <td>{age}/{sex}</td>
                    <td>{mobileNumber}</td>
                    <td>{address}</td>
                    <td>{nationality}</td>
                    <td>{guardian}</td>
                    <td>{govtId}</td>
                </tr>
              )
            })
        }
        </table>
        </>
            
           

       )
  
        
        
    }

    
     

export default Users;