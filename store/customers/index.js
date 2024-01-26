import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "clients",
  initialState: {
    selectedClient: {},
  },
  reducers: {
    setSelectedClient: (state, action) => {
      return {
        ...state,
        selectedClient: action.payload,
      };
    },
  },
});

export default slice.reducer;

export const { setSelectedClient } = slice.actions;

export const setSelectedClientInformation = (data) => async (dispatch) => {
  dispatch(setSelectedClient(data));
};
