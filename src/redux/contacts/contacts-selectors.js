export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const isLoading = state => state.contacts.loading;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filterContacts = getFilter(state);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContacts),
  );
};