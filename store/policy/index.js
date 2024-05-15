import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "policy",
  initialState: {
    selectedPolicy: {},
  },
  reducers: {
    setSelectedPolicy: (state, action) => {
      return {
        ...state,
        selectedPolicy: action.payload,
      };
    },
  },
});

export default slice.reducer;

export const { setSelectedPolicy } = slice.actions;

export const setSelectedPolicyInformation = (data) => async (dispatch) => {
  dispatch(setSelectedPolicy(data));
};
