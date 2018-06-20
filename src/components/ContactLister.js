import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ContactListItem from '../containers/ContactListItem';

const ContactListWrapper = styled.div`
  margin: 20px 0;
`;

function ContactLister({ contacts, sortedBy }) {
  return (
    <ContactListWrapper>
      { contacts.map(contact => (
        <ContactListItem key={contact.login.uuid} contact={contact} sortedBy={sortedBy} />
      ))}
    </ContactListWrapper>
  );
}

ContactLister.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  sortedBy: PropTypes.string.isRequired,
};

export default ContactLister;
