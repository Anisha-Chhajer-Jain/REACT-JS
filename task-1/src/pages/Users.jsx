// import React from 'react'

// function Users() {
//   return (
//     <div>
//       <p>hehehhehheheh</p>
//     </div>
//   )
// }

// export default Users

import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <h4 key={user.id}>{user.name}</h4>
        ))}
      </ul>
    </>
  );
}

export default Users;
