import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = createSelector(
  getContacts,
  getFilter,
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
    return items
      .map(item => item.name.toLowerCase().includes(normalizedFilter) && item)
      .filter(item => item !== false);
  }
);
