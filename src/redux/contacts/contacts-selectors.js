import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const isLoading = state => state.contacts.loading;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filterContacts) => {
  return contacts.filter(({name}) =>
    name.toLowerCase().includes(filterContacts),
  );
});