import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function ContactsPage({ filteredContacts }) {
  return (
    <div>
      <h1>Contacts Page</h1>
      { filteredContacts.map(contact => <p>{contact.login.uuid}</p>)}
    </div>
  );
}

const mapStateToProps = state => ({
  filteredContacts: state.filteredContacts,
});

ContactsPage.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default connect(mapStateToProps)(ContactsPage);
