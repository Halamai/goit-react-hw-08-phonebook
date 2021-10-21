import { createAction, createReducer } from "@reduxjs/toolkit";
export const addNewContact = createAction(
  "contacts/addNewContact",
  (contact) => {
    return { payload: contact };
  }
);
export const getAllContacts = createAction("contacts/getContacts");
export const removeContact = createAction("contacts/removeContact");
export const setFilter = createAction("contacts/setFilter");
export const setLoader = createAction("contacts/setLoader");
export const setError = createReducer("contacts/setError");
