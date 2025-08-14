import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import balance from "./balance";
import clients from "./customers";
import applications from "./applications";
import requests from "./requests";
import auth from "./auth";
import policy from "./policy";
import pets from "./pets";
import payment from "./payment";
import med from "./med";

// Configuración de persistencia para cada reducer (con keys únicas)
const balancePersistConfig = {
  key: "balance",
  storage,
};

const requestsPersistConfig = {
  key: "requests",
  storage,
};

const petsPersistConfig = {
  key: "pets",
  storage,
};

const paymentPersistConfig = {
  key: "payment",
  storage,
};

const medPersistConfig = {
  key: "med",
  storage,
};

// Aplicar persistencia a cada reducer con su propia configuración
const persistedBalanceReducer = persistReducer(balancePersistConfig, balance);
const persistedRequestsReducer = persistReducer(
  requestsPersistConfig,
  requests
);
const persistedPetsReducer = persistReducer(petsPersistConfig, pets);
const persistedPaymentReducer = persistReducer(paymentPersistConfig, payment);
const persistedMedReducer = persistReducer(medPersistConfig, med);

const store = configureStore({
  reducer: {
    balance: persistedBalanceReducer,
    clients,
    applications,
    requests: persistedRequestsReducer,
    auth,
    policy,
    pets: persistedPetsReducer,
    payment: persistedPaymentReducer,
    med: persistedMedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
