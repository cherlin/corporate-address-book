import { API } from '../middleware/api';

export const fetchContacts = endpoint => ({
  type: 'FETCH_CONTACTS',
  [API]: {
    endpoint,
    method: 'GET',
  },
});

export const sortContacts = sort => ({
  type: 'SORT_CONTACTS',
  sort,
});

export const filterContacts = searchTerm => ({
  type: 'FILTER_CONTACTS',
  searchTerm,
});
