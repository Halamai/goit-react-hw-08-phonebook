import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  getAllContacts,
  addNewContact,
  removeContact,
  setFilter,
  setLoader,
  setError,
} from "./actions";
import { signOutSuccess } from "../auth/authActions";

const itemsRedusers = createReducer([], {
  [addNewContact]: (state, action) => [...state, action.payload],
  [getAllContacts]: (_, action) => action.payload,
  [removeContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
  [signOutSuccess]: () => [],
});

const contactLoaderReducer = createReducer(false, {
  [setLoader]: (state) => !state,
  [signOutSuccess]: () => false,
});

const filterReduser = createReducer("", {
  [setFilter]: (_, action) => action.payload,
  [signOutSuccess]: () => "",
});
const errorReducer = createReducer("", {
  [setError]: (_, action) => action.payload,
  [signOutSuccess]: () => "",
});

export const contactsReduser = combineReducers({
  items: itemsRedusers,
  filter: filterReduser,
  isLoading: contactLoaderReducer,
  error: errorReducer,
});
