import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "requests",
  initialState: {
    selectedRequest: {},
    requestInfo: {
      loanApplicationId: null,
      housingTypeId: null,
      housingValue: null,
      builtgDate: null,
      builtArea: null,
      address: null,
      cityId: null,
      birthCityId: null,
      countryNationalityId: null,
      numberChildren: null,
      civilStatusId: null,
      occupation: null,
      occupationActivityId: null,
      isPublicPerson: null,
      residenceCityId: null,
      monthlyIncome: null,
      monthlyExpenses: null,
      assetValue: null,
      liabilitiesValue: null,
      incomeOrigin: null,
      weight: null,
      height: null,
      hivActive: null,
      plannedMedicalProcidure: null,
      disability: null,
      lifeEnsure: null,
      convicted: null,
      beneficiaries: null,
      incomeOrigin: null,
      basementNumber: null,
      apartmentNumber: null,
      buildingFloorsNumber: null,
      documentIdentificationTypeId: null,
      identificationNumber: null,
      documentIssueDate: null,
      name: null,
      lastName: null,
      countryCodePhoneId: null,
      phoneNumber: null,
      email: null,
      diseases: null,
      diseasesMoreInfo: null,
      plannedMedicalProcidureMoreInfo: null,
      disabilityMoreInfo: null,
      beneficiaryName: null,
      beneficiaryIdentificationTypeId: null,
      beneficiaryIdentificationNumber: null,
      loanBalance: null,
      monthlyCostInsurance: null
    }
  },
  reducers: {
    setSelectedRequest: (state, action) => {
      return {
        ...state,
        selectedRequest: action.payload,
      };
    },
    setRequestInfo: (state, action) => {
      return {
        ...state,
        requestInfo: action.payload,
      };
    },
  },
});

export default slice.reducer;

export const { setSelectedRequest, setRequestInfo } = slice.actions;

export const setSelectedRequestInformation = (data) => async (dispatch) => {
  dispatch(setSelectedRequest(data));
};
