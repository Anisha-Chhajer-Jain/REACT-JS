
import { useEffect, useState } from "react";
import './userlist.css'

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []); 

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>Name: {user.name}</h3>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
