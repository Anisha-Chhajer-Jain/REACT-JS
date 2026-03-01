// Child1.js
import React from "react";

const Child1 = ({ data }) => {
  return (
    <div>
      <h2>Saved Users</h2>
      {data.length === 0 ? (
        <p>No users saved yet.</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <strong>Name:</strong> {item.name} | <strong>Email:</strong> {item.email} | <strong>Phone:</strong> {item.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Child1;