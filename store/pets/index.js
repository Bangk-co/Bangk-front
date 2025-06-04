import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "pets",
  initialState: {
    petsForm: {},
  },
  reducers: {
    setPetsForm: (state, action) => {
      return {
        ...state,
        petsForm: action.payload,
      };
    },
  },
});

export default slice.reducer;

export const { setPetsForm } = slice.actions;

export const setPetsFormInfo = (data) => async (dispatch) => {
  dispatch(setPetsForm(data));
};
