import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary text-center">
      <ul>
        <li>
          <Link to="/">Secret Santa</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
