import React from 'react';
import PropTypes from 'prop-types';

function Searcher({ onSearch, value }) {
  return (
    <div>
      <input type="text" onChange={onSearch} value={value} />
    </div>
  );
}

Searcher.propTypes = {
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Searcher;
