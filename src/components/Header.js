import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: #0077B5;
  padding: 10px 0;
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin: 0;
  color: white;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

function Header({ title }) {
  return (
    <HeaderWrapper>
      <HeaderTitle><StyledLink to="/">{ title }</StyledLink></HeaderTitle>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
