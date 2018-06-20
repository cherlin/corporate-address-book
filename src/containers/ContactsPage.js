import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactSorter from '../components/ContactSorter';
import ContactSearcher from '../components/ContactSearcher';
import ContactLister from '../components/ContactLister';
import { filterContacts, sortContacts } from '../actions';

function ContactsPage({
  contacts, // 'contacts' from state
  search, // Dispatcher of search action
  sort, // Dispatcher of sort action
  searchInput, // 'searchInput' from state
  sortedBy, // 'sortedBy' from state
}) {
  const handleSort = (event) => {
    sort(event.target.value);
  };

  const handleSearch = (event) => {
    search(event.target.value);
  };

  return (
    <div>
      <h1>Contacts Page</h1>
      { contacts.length ? (
        <React.Fragment>
          <ContactSorter onSort={handleSort} value={sortedBy} />
          <ContactSearcher onSearch={handleSearch} value={searchInput} />
          <ContactLister contacts={contacts} sortedBy={sortedBy} />
        </React.Fragment>
      ) : (
        <div>Loading...</div>
      ) }
    </div>
  );
}

const sorter = (sortedBy) => {
  if (sortedBy === 'firstName') {
    return (a, b) => (b.name.first < a.name.first ? 1 : -1);
  }
  return (a, b) => (a.name.last > b.name.last ? 1 : -1);
};

const contactListFormatter = (sortedBy, searchInput, contacts) => {
  if (!searchInput) return contacts.sort(sorter(sortedBy));
  const search = contact => `${contact.name.first} ${contact.name.last}`.includes(searchInput.toLowerCase().trim());
  return contacts.sort(sorter(sortedBy)).filter(search);
};

const mapStateToProps = state => ({
  contacts: contactListFormatter(state.sortedBy, state.searchInput, state.contacts),
  searchInput: state.searchInput,
  sortedBy: state.sortedBy,
});

const mapDispatchToProps = dispatch => ({
  search: searchTerm => dispatch(filterContacts(searchTerm)),
  sort: sort => dispatch(sortContacts(sort)),
});

ContactsPage.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  searchInput: PropTypes.string.isRequired,
  sortedBy: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
