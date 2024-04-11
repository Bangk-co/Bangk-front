import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "auth",
  initialState: {
    emailStore: "",
  },
  reducers: {
    setEmailStore: (state, action) => {
      return {
        ...state,
        emailStore: action.payload,
      };
    },
  },
});

export default slice.reducer;

export const { setEmailStore } = slice.actions;
