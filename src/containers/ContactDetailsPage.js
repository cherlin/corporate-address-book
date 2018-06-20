import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export function details(fetching, currentContact) {
  if (fetching) return (<p>Loading!</p>);
  if (!currentContact.length) return (<p>No contact with that id!</p>);
  return (
    currentContact.map(person => <p>Contact Name: {person.name.first}</p>)
  );
}

function ContactDetailsPage({ contact, fetchingContacts }) {
  return (
    <div>
      <h2>Contact Details Page</h2>
      { details(fetchingContacts, contact) }
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  // Get only the contacts matching the id in the url.
  contact: state.contacts.filter(contact => contact.login.uuid === ownProps.match.params.id),
  fetchingContacts: state.fetchingContacts,
});

ContactDetailsPage.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  fetchingContacts: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(ContactDetailsPage);
