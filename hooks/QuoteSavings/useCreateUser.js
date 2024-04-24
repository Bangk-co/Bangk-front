import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";
import dayjs from "dayjs";

const useCreateClient = () => {
  const mutation = useMutation((payload) => {
    const newBirthdate = new Date(payload.birthdate)
    const newTermsDate = new Date(payload.termsDate)
    const formData = new FormData();

    formData.append("Name", payload.name)
    formData.append("LastName", payload.lastname)
    formData.append("PhoneNumber", Number(payload.phone))
    formData.append("CountryCodePhoneId", payload.countryCode)
    formData.append("Email", payload.email)
    formData.append("IdentificationNumber", payload.identificationNumber)
    formData.append("BirthDate", dayjs(newBirthdate).format('MM/DD/YYYY HH:mm:ss'))
    formData.append("IdentificationFile", payload.identificationFile)
    formData.append("DocumenIdentificationTypeId", payload.documentType)
    formData.append("GenderId", payload.gender)
    formData.append("PermissionTreatPersonalDataDate", dayjs(newTermsDate).format('MM/DD/YYYY HH:mm:ss'))
    formData.append("LoadAplicacionDto.LoanBalance", Number(payload.balance))
    formData.append("LoadAplicacionDto.BankStatementFile", payload.bankStatementFile)
    formData.append("LoadAplicacionDto.BankId", payload.bankId)
    formData.append("LoadAplicacionDto.LoanTypeId", payload.loanTypeId)
    formData.append("LoadAplicacionDto.LoanNumber", payload.loanNumber.toString())
    formData.append("validateClientOtp", dayjs(payload.validateClientOtp))

    return axiosClient.post("/Client/CreateClientService", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  });
  return mutation;
};
export default useCreateClient;
