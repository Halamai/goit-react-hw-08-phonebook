import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contacts/redusers";
import { authReducer } from "./auth/authReducers";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
persistStore(store);
export default store;
