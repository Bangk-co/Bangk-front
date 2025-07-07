import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "pets",
  initialState: {
    petsForm: {},
  },
  reducers: {
    setPetsFormInfo: (state, action) => {
      return {
        ...state,
        petsForm: action.payload,
      };
    },
    resetPetsFormInfo: (state) => {
      return {
        ...state,
        petsForm: {},
      };
    },
  },
});

export default slice.reducer;

export const { setPetsFormInfo, resetPetsFormInfo } = slice.actions;
