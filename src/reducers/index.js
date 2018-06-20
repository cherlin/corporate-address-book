const defaultState = {
  contacts: [],
  sortedByFirstName: [],
  sortedByLastName: [],
  filteredContacts: [],
  searchInput: '',
  fetchingContacts: false,
  fetchingContactsFailed: '',
  sortedBy: 'lastName',
};

const contacts = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_CONTACTS_REQUEST':
      return { ...state, fetchingContacts: true };
    case 'FETCH_CONTACTS_SUCCESS':
      return {
        ...state,
        fetchingContacts: false,
        contacts: action.data.results,
        // Initialize with all contacts before user search/filter.
        filteredContacts: action.data.results,
      };
    case 'FETCH_CONTACTS_FAILURE':
      return {
        ...state,
        fetchingContacts: false,
        fetchingContactsFailed: action.error,
      };
    default:
      return state;
  }
};

export default contacts;
