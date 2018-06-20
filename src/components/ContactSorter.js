import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SorterWrapper = styled.div`
  margin-left: 10px;
  width: 120px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
`;

const Select = styled.select`
  border: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 18px;
  border-radius: 5px;
  padding: 5px 8px;
  height: 32px;
`;

function Sorter({ onSort, value }) {
  return (
    <SorterWrapper>
      <Label for="sorting">Sorting</Label>
      <Select onChange={onSort} value={value} name="sorting" id="sortint">
        <option value="lastName" default>Last Name</option>
        <option value="firstName">First Name</option>
      </Select>
    </SorterWrapper>
  );
}

Sorter.propTypes = {
  onSort: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Sorter;
