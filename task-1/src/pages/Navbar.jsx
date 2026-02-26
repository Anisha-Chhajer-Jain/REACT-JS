import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/posts">HOME</Link>
        </li>
        <li>
          <Link to="/products">POST</Link>
        </li>
        <li>
          <Link to="/users">USERS</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;