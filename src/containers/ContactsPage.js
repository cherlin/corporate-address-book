import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ContactsPage({ filteredContacts }) {
  return (
    <div>
      <h1>Contacts Page</h1>
      { filteredContacts.map(contact => (
        <div key={contact.login.uuid}>
          <Link to={`/contact/${contact.login.uuid}`}>{contact.login.uuid}</Link>
        </div>
      ))}
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
