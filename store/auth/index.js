import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "auth",
  initialState: {
    emailStore: "",
    authCredentials: {
      email: "",
      password: ""
    }
  },
  reducers: {
    setEmailStore: (state, action) => {
      return {
        ...state,
        emailStore: action.payload,
      };
    },
    setAuthCredentials: (state, action) => {
      return {
        ...state,
        authCredentials: action.payload,
      }
    }
  },
});

export default slice.reducer;

export const { setEmailStore, setAuthCredentials } = slice.actions;
