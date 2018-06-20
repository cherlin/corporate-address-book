import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { nameCapitalizer } from '../utils';

const Card = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  margin: 10px 0;
  padding: 12px 15px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const Name = styled.p`
  font-size: 18px;
  text-decoration: none;
  margin: 0;
`;

const Avatar = styled.img`
  border-radius: 100px;
  border: 2px solid #00A0DC;
  margin-right: 15px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #313335;
`;

const NamePhone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Phone = styled.p`
  margin: 5px 0 0;
  color: rgba(0, 0, 0, 0.5);
`;

const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
`;

const formatName = (sort, name) => {
  if (sort === 'lastName') return (<Name>{nameCapitalizer(name.last)}, {nameCapitalizer(name.first)}</Name>);
  return (<Name>{nameCapitalizer(name.first)} {nameCapitalizer(name.last)}</Name>);
};

function ContactListItem({ contact, sortedBy }) {
  const { name, login } = contact;
  return (
    <Card key={login.uuid}>
      <ProfilePicture>
        <StyledLink to={`/contact/${login.uuid}`}><Avatar src={contact.picture.thumbnail} /></StyledLink>
      </ProfilePicture>
      <NamePhone>
        <StyledLink to={`/contact/${login.uuid}`}>
          { formatName(sortedBy, name) }
        </StyledLink>
        <Phone>Phone: {contact.phone}</Phone>
      </NamePhone>
    </Card>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.any).isRequired,
  sortedBy: PropTypes.string.isRequired,
};

export default ContactListItem;
