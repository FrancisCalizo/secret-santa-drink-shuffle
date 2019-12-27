import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary text-center">
      <ul>
        <li>
          <i className="fas fa-candy-cane fa-2x"></i>
          <Link to="/">Secret Santa</Link>
          <i className="fas fa-candy-cane fa-2x"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
