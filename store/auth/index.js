import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "auth",
  initialState: {
    emailStore: "",
    clientId: null,
    authCredentials: {
      email: "",
      password: "",
    },
    userInfo: {
      clientId: 0,
      name: "",
      lastName: "",
      email: "",
      identificationNumber: "",
      documenIdentificationTypeId: "",
      acceptTermsDate: "",
      permissionTreatPersonalDataDate: "",
      validateClientOtp: "",
    },
  },
  reducers: {
    setClientId: (state, action) => {
      return {
        ...state,
        clientId: action.payload,
      };
    },
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
      };
    },
    setUserInfo: (state, action) => {
      return {
        ...state,
        userInfo: action.payload,
      };
    },
  },
});

export default slice.reducer;

export const { 
  setEmailStore, 
  setAuthCredentials, 
  setUserInfo, 
  setClientId 
} = slice.actions;
