import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "balance",
  initialState: {
    initData: {
      balance: "",
      birthdate: null,
      gender: ""
    },
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
      };
    },
    setInitData: (state, action) => {
      return {
        ...state,
        initData: action.payload
      };
    },
  },
});

export default slice.reducer;

export const {
  resetInitData,
  setInitData
} = slice.actions;

