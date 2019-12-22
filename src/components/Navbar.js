import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <ul>
        <li>
          <Link to="/">The Secret Santa</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'GitHub Finder'
  // icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
  // icon: PropTypes.string.isRequired
};
export default Navbar;
