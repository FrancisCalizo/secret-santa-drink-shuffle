import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-elephant text-center">
      <ul>
        <li>
          <i className="fas fa-gift fa-2x"></i>
          <Link
            to="/whiteelephant"
            style={{ fontSize: "2.1rem", color: "#FFF" }}
          >
            White Elephant
          </Link>
          <i className="fas fa-gift fa-2x"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
