import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "med",
  initialState: {
    medForm: {},
  },
  reducers: {
    setMedFormInfo: (state, action) => {
      return {
        ...state,
        medForm: action.payload,
      };
    },
    resetMedFormInfo: (state) => {
      return {
        ...state,
        medForm: {},
      };
    },
  },
});

export default slice.reducer;

export const { setMedFormInfo, resetMedFormInfo } = slice.actions;

