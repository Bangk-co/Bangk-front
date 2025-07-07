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
  },
});

export default slice.reducer;

export const { setPetsFormInfo } = slice.actions;
