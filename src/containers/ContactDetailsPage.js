import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function ContactDetailsPage({ contact }) {
  return (
    <div>
      <h1>Contact Details Page</h1>
      { contact.length
        ? contact.map(person => <p>Contact Name: {person.name.first}</p>)
        : <p>No contact with that id could be found!</p>
      }
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  // Get only the contacts matching the id in the url.
  contact: state.contacts.filter(contact => contact.login.uuid === ownProps.match.params.id),
});

ContactDetailsPage.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default connect(mapStateToProps)(ContactDetailsPage);
