import React from 'react';
import PropTypes from 'prop-types';

function Header({ title }) {
  return (
    <div>
      <h1>{ title }</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
