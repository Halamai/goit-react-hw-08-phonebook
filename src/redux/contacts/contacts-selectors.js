import { createSelector } from "reselect";
const contactsErrorSelector = (state) => state.contacts.error;
const contactsIsLoadingSelector = (state) => state.contacts.isLoading;
const contactsContactsgSelector = (state) => state.contacts.items;
const contactsFilterSelector = (state) => state.contacts.filter;

export const getWisibileContacts = createSelector(
  [contactsContactsgSelector, contactsFilterSelector],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);

export {
  contactsErrorSelector,
  contactsIsLoadingSelector,
  contactsContactsgSelector,
  contactsFilterSelector,
};
