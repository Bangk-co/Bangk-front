import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useCreateClient = () => {
  const mutation = useMutation((payload) => {
    const formData = new FormData();

    formData.append("Name", payload.name)
    formData.append("LastName", payload.lastname)
    formData.append("PhoneNumber", Number(payload.phone))
    formData.append("CountryCodePhoneId", payload.countryCode)
    formData.append("Email", payload.email)
    formData.append("IdentificationNumber", payload.identificationNumber)
    formData.append("BirthDate", payload.birthdate)
    formData.append("IdentificationFile", payload.identificationFile)
    formData.append("DocumenIdentificationTypeId", payload.documentType)
    formData.append("GenderId", payload.gender)
    formData.append("PermissionTreatPersonalDataDate", payload.termsDate)
    formData.append("LoanBalance", Number(payload.balance))
    formData.append("LoadAplicacionDto.BankStatementFile", payload.bankStatementFile)
    formData.append("LoadAplicacionDto.BankId", payload.bankId)
    formData.append("LoadAplicacionDto.LoanTypeId", payload.loanTypeId)
    formData.append("LoadAplicacionDto.LoanNumber", payload.loanNumber.toString())

    return axiosClient.post("/Client/CreateClientService", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  });
  return mutation;
};
export default useCreateClient;
