import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-light text-center">
      <ul>
        <li>
          <Link to="/whiteelephant" style={{ color: "#000" }}>
            White Elephant
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
