import React from 'react';
import PropTypes from 'prop-types';

function Sorter({ onSort, value }) {
  return (
    <div>
      <select onChange={onSort} value={value}>
        <option value="lastName" default>By Last Name</option>
        <option value="firstName">By First Name</option>
      </select>
    </div>
  );
}

Sorter.propTypes = {
  onSort: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Sorter;
