import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import balance from "./balance";
import clients from "./customers";
import applications from "./applications";
import requests from "./requests";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, balance);

const store = configureStore({
  reducer: {
    balance: persistedReducer,
    clients,
    applications,
    requests,
  },
});

const persistor = persistStore(store);

export { store, persistor };
