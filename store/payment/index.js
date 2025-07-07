import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "payment",
  initialState: {
    paymentInfo: {},
    paymentSource: "",
  },
  reducers: {
    setPaymentInfo: (state, action) => {
      return {
        ...state,
        paymentInfo: action.payload,
      };
    },
    setPaymentSource: (state, action) => {
      return {
        ...state,
        paymentSource: action.payload,
      };
    },
  },
});

export default slice.reducer;

export const { setPaymentInfo, setPaymentSource } = slice.actions;

export const setPaymentInformation = (data) => async (dispatch) => {
  dispatch(setPaymentInfo(data));
};
