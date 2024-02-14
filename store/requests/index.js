import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "requests",
  initialState: {
    selectedRequest: {},
  },
  reducers: {
    setSelectedRequest: (state, action) => {
      return {
        ...state,
        selectedRequest: action.payload,
      };
    },
  },
});

export default slice.reducer;

export const { setSelectedRequest } = slice.actions;

export const setSelectedRequestInformation = (data) => async (dispatch) => {
  dispatch(setSelectedRequest(data));
};
