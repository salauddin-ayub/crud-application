import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data =>setUsers(data));
    }, []);

    //DELETE USER FROM
    const handleDeleteUser = id =>{
       const proceed = window.confirm('Are you sure, you want to delete?')
       if(proceed){
        const url = `http://localhost:5000/users/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount >0){
                alert('deleted successfully');
                const remainingUsers = users.filter(user => user._id !== id)
                setUsers(remainingUsers);
            }
        })
       }
    }
    return (
        <div class="container">
             <div class="myCard">
            <header>Total player available: {users.length}</header> 
            {/* <h2> Users Available: {users.length}</h2>    */}
            <table class="table table-striped table-dark">
              <thead class="thead-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Rank</th>
                    <th scope="col">Catregory</th>
                    <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                  {
                     users.map(user => <tr key={user._id}>
                         <td>{user.name}</td>
                         <td>{user.email}</td>
                         <td>{user.rank}</td>
                         <td>{user.cat}</td>
                         <td><Link to={`/users/update/${user._id}`}><button>Update</button></Link>
                        <button onClick={() => handleDeleteUser(user._id)}>Delete</button></td>
                     </tr>)
                
                  }
              </tbody>
            </table>  
        </div>

        </div>
       
    );
};

export default Users;