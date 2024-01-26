import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "balance",
  initialState: {
    initData: {
      balance: "",
      birthdate: null,
      gender: ""
    },
    userInfo: {
      documentType: 76,
      identificationNumber: "",
      name: "",
      lastname: "",
      countryCode: 6,
      phone: "",
      email: "",
    },
    termsDate: null,
  },
  reducers: {
    resetInitData: (state) => {
      return {
        ...state,
        initData: {
          balance: "",
          birthdate: null,
          gender: ""
        },
        userInfo: {
          documentType: 76,
          identificationNumber: "",
          name: "",
          lastname: "",
          countryCode: 6,
          phone: "",
          email: "",
        },
        termsDate: null,
      };
    },
    setInitData: (state, action) => {
      return {
        ...state,
        initData: action.payload
      };
    },
    setUserInfo: (state, action) => {
      return {
        ...state,
        userInfo: action.payload
      };
    },
    setTermsDate: (state, action) => {
      return {
        ...state,
        termsDate: action.payload
      };
    },
  },
});

export default slice.reducer;

export const {
  resetInitData,
  setInitData,
  setUserInfo,
  setTermsDate
} = slice.actions;

