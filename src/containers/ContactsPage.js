import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ContactSorter from '../components/ContactSorter';
import ContactSearcher from '../components/ContactSearcher';
import ContactLister from '../components/ContactLister';
import { filterContacts, sortContacts } from '../actions';

const ContactPageWrapper = styled.div`
  max-width: 800px;
  margin: 30px auto;
  @media (max-width: 768px) {
    margin: 20px auto;
    padding: 0 20px;
  }
`;

const SearchSortWrapper = styled.form`
  display: flex;
  margin-bottom: 20px;
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

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
    <ContactPageWrapper>
      { contacts.length ? (
        <React.Fragment>
          <SearchSortWrapper>
            <ContactSearcher onSearch={handleSearch} value={searchInput} />
            <ContactSorter onSort={handleSort} value={sortedBy} />
          </SearchSortWrapper>
          <ContactLister contacts={contacts} sortedBy={sortedBy} />
        </React.Fragment>
      ) : (
        <div>Loading...</div>
      ) }
    </ContactPageWrapper>
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
