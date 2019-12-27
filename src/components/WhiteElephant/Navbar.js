import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-elephant text-center">
      <ul>
        <li>
          <i class="fas fa-gift fa-2x"></i>
          <Link
            to="/whiteelephant"
            style={{ fontSize: '1.8rem', color: '#FFF' }}
          >
            White Elephant
          </Link>
          <i class="fas fa-gift fa-2x"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
