import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const nameCapitalizer = name => name.replace(name.charAt(0), name.charAt(0).toUpperCase());

const formatName = (sort, name) => {
  if (sort === 'lastName') return (<p>{nameCapitalizer(name.last)}, {nameCapitalizer(name.first)}</p>);
  return (<p>{nameCapitalizer(name.first)} {nameCapitalizer(name.last)}</p>);
};

function ContactListItem({ contact, sortedBy }) {
  const { name, login } = contact;
  return (
    <div key={login.uuid}>
      <Link to={`/contact/${login.uuid}`}>
        { formatName(sortedBy, name) }
      </Link>
    </div>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.any).isRequired,
  sortedBy: PropTypes.string.isRequired,
};

export default ContactListItem;
