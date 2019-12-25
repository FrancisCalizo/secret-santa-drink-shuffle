import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-elephant text-center">
      <ul>
        <li>
          <Link
            to="/whiteelephant"
            style={{ fontSize: '2.5rem', color: '#000' }}
          >
            White Elephant
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
