import React from 'react';
import PropTypes from 'prop-types';

function ContactDetailsContainer({ match }) {
  return (
    <div>
      <h1>Contact Details Container</h1>
      <p>{match.params.id}</p>
    </div>
  );
}

ContactDetailsContainer.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ContactDetailsContainer;
