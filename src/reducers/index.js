const defaultState = {
  contacts: [],
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
        // Sort by last name as a default.
        contacts: action.data.results.sort((a, b) => (a.name.last > b.name.last ? 1 : -1)),
      };
    case 'FETCH_CONTACTS_FAILURE':
      return {
        ...state,
        fetchingContacts: false,
        fetchingContactsFailed: action.error,
      };
    case 'FILTER_CONTACTS':
      return {
        ...state,
        searchInput: action.searchTerm,
      };
    case 'SORT_CONTACTS':
      return {
        ...state,
        sortedBy: action.sort,
      };
    default:
      return state;
  }
};

export default contacts;
