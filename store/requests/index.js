import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "requests",
  initialState: {
    selectedRequest: {},
    requestInfo: {
      loanApplicationId: null,
      housingTypeId: null,
      housingValue: "",
      builtgDate: null,
      builtArea: "",
      address: "",
      cityId: null,
      birthCityId: null,
      countryNationalityId: null,
      numberChildren: "",
      civilStatusId: null,
      occupation: "",
      occupationActivityId: null,
      isPublicPerson: null,
      residenceCityId: null,
      monthlyIncome: "",
      monthlyExpenses: "",
      assetValue: "",
      liabilitiesValue: "",
      weight: "",
      height: "",
      hivActive: null,
      plannedMedicalProcidure: null,
      disability: null,
      lifeEnsure: null,
      convicted: null,
      beneficiaries: null,
      incomeOrigin: "",
      basementNumber: "",
      apartmentNumber: "",
      buildingFloorsNumber: "",
      documentIdentificationTypeId: null,
      identificationNumber: "",
      documentIssueDate: null,
      name: "",
      lastName: "",
      countryCodePhoneId: null,
      phoneNumber: "",
      email: "",
      diseases: [],
      diseasesMoreInfo: "",
      plannedMedicalProcidureMoreInfo: "",
      disabilityMoreInfo: "",
      beneficiaryName: "",
      beneficiaryIdentificationTypeId: null,
      beneficiaryIdentificationNumber: ""
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
