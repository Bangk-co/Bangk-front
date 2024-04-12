import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import balance from "./balance";
import clients from "./customers";
import applications from "./applications";
import requests from "./requests";
import auth from "./auth";

const persistConfig = {
  key: "root",
  storage,
};

const persistedBalanceReducer = persistReducer(persistConfig, balance);
const persistedRequestsReducer = persistReducer(persistConfig, requests);

const store = configureStore({
  reducer: {
    balance: persistedBalanceReducer,
    clients,
    applications,
    requests: persistedRequestsReducer,
    auth
  },
});

const persistor = persistStore(store);

export { store, persistor };

