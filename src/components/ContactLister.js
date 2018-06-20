import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../containers/ContactListItem';

function ContactLister({ contacts, sortedBy }) {
  return (
    <div>
      { contacts.map(contact => (
        <ContactListItem key={contact.login.uuid} contact={contact} sortedBy={sortedBy} />
      ))}
    </div>
  );
}

ContactLister.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  sortedBy: PropTypes.string.isRequired,
};

export default ContactLister;
