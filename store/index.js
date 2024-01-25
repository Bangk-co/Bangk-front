import { configureStore } from "@reduxjs/toolkit";
import balance from "./balance";
import clients from "./customers";

export const store = configureStore({
  reducer: {
    balance,
    clients,
  },
});
