import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "applications",
  initialState: {
    selectedApplication: {},
  },
  reducers: {
    setSelectedApplication: (state, action) => {
      return {
        ...state,
        selectedApplication: action.payload,
      };
    },
  },
});

export default slice.reducer;

export const { setSelectedApplication } = slice.actions;

export const setSelectedApplicationInformation = (data) => async (dispatch) => {
  dispatch(setSelectedApplication(data));
};
