import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearcherWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 18px;
  padding: 5px 8px;
`;

function Searcher({ onSearch, value }) {
  return (
    <SearcherWrapper>
      <Label for="search">Search</Label>
      <Input type="search" onChange={onSearch} value={value} name="search" id="search" />
    </SearcherWrapper>
  );
}

Searcher.propTypes = {
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Searcher;
