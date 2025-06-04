import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "med",
  initialState: {
    medForm: {},
  },
  reducers: {
    setMedForm: (state, action) => {
      return {
        ...state,
        medForm: action.payload,
      };
    },
  },
});

export default slice.reducer;

export const { setMedForm } = slice.actions;

export const setMedFormInfo = (data) => async (dispatch) => {
  dispatch(setMedForm(data));
};
