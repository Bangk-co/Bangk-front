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
  },
});

export default slice.reducer;

export const { setMedFormInfo } = slice.actions;

