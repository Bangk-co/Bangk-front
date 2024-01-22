import { configureStore } from "@reduxjs/toolkit";
import balance from "./balance";

export const store = configureStore({
  reducer: {
    balance
  },
});
