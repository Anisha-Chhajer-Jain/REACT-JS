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
          <Link to="/products">ABOUT</Link>
        </li>
        <li>
          <Link to="/users">OTHERS</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;