// Tools
import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
  return (
    <nav className='bg-orange-400 border-gray-200 px-2 sm:px-4 py-2.5 text-xl'>
      <i className={icon}></i> {title}
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'Github Finder Tut',
  icon: 'fa-brands fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
