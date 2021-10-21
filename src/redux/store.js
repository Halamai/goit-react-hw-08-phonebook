import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contacts/redusers";
import { authReducer } from "./auth/authReducers";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["tokens", "user"],
};

const rootReducer = combineReducers({
  contacts: contactsReduser,
  authorization: persistReducer(persistConfig, authReducer),
});
const store = configureStore({
  reducer: rootReducer,
});
persistStore(store);
export default store;
