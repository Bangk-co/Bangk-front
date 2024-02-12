import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "clients",
  initialState: {
    selectedClient: {},
    loanInfo: {},
    quoteId: null
  },
  reducers: {
    setSelectedClient: (state, action) => {
      return {
        ...state,
        selectedClient: action.payload,
      };
    },
    setLoanInfo: (state, action) => {
      return {
        ...state,
        loanInfo: action.payload,
      }
    },
    setQuoteId: (state, action) => {
      return {
        ...state,
        quoteId: action.payload,
      }
    },
  },
});

export default slice.reducer;

export const { setSelectedClient, setLoanInfo, setQuoteId } = slice.actions;

export const setSelectedClientInformation = (data) => async (dispatch) => {
  dispatch(setSelectedClient(data));
};
