import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "payment",
  initialState: {
    paymentInfo: {},
  },
  reducers: {
    setPaymentInfo: (state, action) => {
      return {
        ...state,
        paymentInfo: action.payload,
      };
    },
  },
});

export default slice.reducer;

export const { setPaymentInfo } = slice.actions;

export const setPaymentInformation = (data) => async (dispatch) => {
  dispatch(setPaymentInfo(data));
};
